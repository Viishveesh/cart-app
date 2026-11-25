import { cpSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("public", "dist", { recursive: true });
cpSync("src/cart.js", "dist/cart.js");

console.log("Build complete: dist/");
