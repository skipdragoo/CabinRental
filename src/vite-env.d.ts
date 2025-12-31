/// <reference types="vite/client" />

// If your editor/TS server isn't picking up Vite's asset types, this ensures
// imports like `import img from "./foo.png"` typecheck correctly.
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.webp" {
  const src: string;
  export default src;
}

