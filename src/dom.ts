const createElement = (elName, opts: any = {}) => {
  const el = document.createElement(elName) as HTMLElement;

  if (opts.classList != null) {
    opts.classList.forEach((name) => {
      el.classList.add(name);
    });
  }

  if (opts.textContent) {
    el.textContent = opts.textContent;
  }

  if (opts.src) {
    el.src = opts.src;
  }

  if (opts.id) {
    el.id = opts.id;
  }

  if (opts.childs) {
    opts.childs.forEach((child) => {
      el.appendChild(child);
    });
  }

  return el;
};

const createParagraph = (textContent, opts: any = {}) => {
  return createElement("p", {
    textContent,
    ...opts,
  });
};

const createHeading = (textContent, level = 1, opts: any = {}) => {
  level = Math.min(level < 1 ? 1 : level, 6);

  const tag = `h${level}`;
  return createElement(tag, {
    textContent,
    ...opts,
  });
};

const createImg = (src, opts: any = {}) => {
  return createElement("img", {
    src,
    ...opts,
  });
};

export { createElement, createParagraph, createHeading, createImg };
