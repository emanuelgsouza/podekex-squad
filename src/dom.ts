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

  if (opts.childs) {
    opts.childs.forEach((child) => {
      el.appendChild(child);
    });
  }

  return el;
};

export { createElement };
