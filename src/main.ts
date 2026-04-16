const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    height: 7,
    weight: 69
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    height: 10,
    weight: 130
  },
  {
    id: 3,
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    },
    height: 20,
    weight: 1000
  },
  {
    id: 4,
    "name": "charmander",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    "height": 6,
    "weight": 85
  },
  {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    height: 7,
    weight: 69
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    height: 10,
    weight: 130
  },
  {
    id: 3,
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    },
    height: 20,
    weight: 1000
  },
  {
    id: 4,
    "name": "charmander",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    "height": 6,
    "weight": 85
  },
  {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    height: 7,
    weight: 69
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    height: 10,
    weight: 130
  },
  {
    id: 3,
    name: 'venusaur',
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    },
    height: 20,
    weight: 1000
  },
  {
    id: 4,
    "name": "charmander",
    types: [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    sprite: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    "height": 6,
    "weight": 85
  }
]

const createPokemonCardTypes = (pokemon) => {
  const pokemonCardTypesElement = document.createElement('ul')
  for (let index = 0; index < pokemon.types.length; index++) {
    const type = pokemon.types[index]
    const listElement = document.createElement('li')
    listElement.textContent = type.type.name
    pokemonCardTypesElement.appendChild(listElement)
  }

  return pokemonCardTypesElement
}

/*
Para melhorar:
- Colocar cores por tipo
- Refatorar código duplicado
- Calcular altura e peso
  - Peso está em hectograma
  - Altura está em decimetro
*/

const main = () => {
  const list = document.querySelector('#pokemons-list')

  for (let index = 0; index < pokemonList.length; index++) {
    const pokemon = pokemonList[index]

    const listElement = document.createElement('li')
    listElement.classList.add('pokemon-card-item')

    const pokemonCard = document.createElement('article')

    pokemonCard.classList.add('pokemon-card')

    const pokemonCardHeader = document.createElement('header')
    const pokemonCardIdentifier = document.createElement('p')
    pokemonCardIdentifier.classList.add('pokemon-card-id')
    pokemonCardIdentifier.textContent = `#${pokemon.id}`

    const pokemonCardTypesElement = createPokemonCardTypes(pokemon)
    pokemonCardTypesElement.classList.add('pokemon-card-types')
    const pokemonCardTitle = document.createElement('h3')
    pokemonCardTitle.textContent = pokemon.name

    const pokemanCardImage = document.createElement('img')
    pokemanCardImage.src = pokemon.sprite.front_default

    const pokemonCardFooter = document.createElement('footer')
    const pokemonCardHeight = document.createElement('p')
    pokemonCardHeight.textContent = pokemon.height
    const pokemonCardWeight = document.createElement('p')
    pokemonCardWeight.textContent = pokemon.weight

    pokemonCardHeader.appendChild(pokemonCardIdentifier)
    pokemonCardHeader.appendChild(pokemonCardTypesElement)

    pokemonCardFooter.appendChild(pokemonCardHeight)
    pokemonCardFooter.appendChild(pokemonCardWeight)

    pokemonCard.appendChild(pokemonCardHeader)
    pokemonCard.appendChild(pokemonCardTitle)
    pokemonCard.appendChild(pokemanCardImage)
    pokemonCard.appendChild(pokemonCardFooter)

    listElement.appendChild(pokemonCard)

    list?.appendChild(listElement)
  }
}

document.addEventListener('DOMContentLoaded', main)