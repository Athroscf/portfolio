const display = {
  location: true,
  time: true,
};

const effects = {
  gradient: true,
  dots: true,
  lines: false,
};

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "green", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
};

export { display, effects, routes, style };
