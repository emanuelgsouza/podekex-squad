import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "src", "data");
const OUT_FILE = join(OUT_DIR, "pokemon.json");

const API_BASE = "https://pokeapi.co/api/v2/pokemon";

/** National dex #1–151 (Kanto / generation I). */
const KANTO_DEX_IDS = Array.from({ length: 151 }, (_, i) => i + 1);

function parseIds(argv) {
  const raw = argv.slice(2).filter((a) => a !== "--");
  if (raw.length === 0) return KANTO_DEX_IDS;

  if (raw.some((a) => /^kanto$/i.test(a) || a === "--kanto")) {
    return KANTO_DEX_IDS;
  }

  return raw.map((s) => {
    const n = Number(s);
    if (!Number.isInteger(n) || n < 1) {
      throw new Error(`Invalid pokémon id: ${s}`);
    }
    return n;
  });
}

function spriteFrontDefault(id, sprites) {
  return (
    sprites?.front_default ??
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );
}

function mapPokemon(body) {
  return {
    id: body.id,
    name: body.name,
    types: body.types,
    sprite: { front_default: spriteFrontDefault(body.id, body.sprites) },
    height: body.height,
    weight: body.weight,
  };
}

async function fetchPokemon(id) {
  const url = `${API_BASE}/${id}/`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
  }
  return res.json();
}

async function main() {
  const ids = parseIds(process.argv);
  const list = [];
  const total = ids.length;
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const body = await fetchPokemon(id);
    list.push(mapPokemon(body));
    if (total > 10 && (i + 1) % 25 === 0) {
      console.error(`Progress: ${i + 1}/${total}`);
    }
  }
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(OUT_FILE, `${JSON.stringify(list, null, 2)}\n`, "utf8");
  console.error(`Wrote ${list.length} pokémon → ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
