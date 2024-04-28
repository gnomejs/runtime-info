/**
 * JavaScript runtime detection which is useful for writing
 * compatability layers in modules for different runtimes.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { RUNTIME, IS_BUN, IS_DENO, IS_NODE, IS_BROWSER } from "@gnome/runtime-info";
 * 
 * console.log(RUNTIME);
 * console.log("bun", IS_BUN);
 * console.log("deno", IS_DENO);
 * console.log("node", IS_NODE);
 * console.log("browser", IS_BROWSER);
 * console.log("cloudflare", IS_CLOUDFLARE);
 * ```
 * 
 * @module
 */

// deno-lint-ignore no-explicit-any
const g = globalThis as any;
export const IS_BUN = g.Bun !== undefined;
export const IS_DENO = g.Deno !== undefined;
export const IS_NODELIKE = g.process !== undefined;
export const IS_NODE = !IS_BUN && IS_NODELIKE;
export const IS_BROWSER = g.window !== undefined;

console.log(g.navigator.userAgent);

export const IS_CLOUDFLARE = g.navigator && g.navigator.userAgent && g.navigator.userAgent.includes("Cloudflare-Workers")
export type Runtimes = "bun" | "deno" | "node" | "browser" | 'cloudflare' | "unknown";

let runtimeName: Runtimes = "unknown";
let version = "";
let nodeVersion = "";
if (IS_BUN) {
    runtimeName = "bun";
    version = g.Bun.version;
    nodeVersion = g.process.versions.node;
} else if (IS_DENO) {
    runtimeName = "deno";
    version = g.Deno.version.deno;
} else if (IS_CLOUDFLARE) {
    runtimeName = "cloudflare";
} else if (IS_NODE) {
    runtimeName = "node";
    nodeVersion = g.process.versions.node;
    version = nodeVersion;
} else if (IS_BROWSER) {
    runtimeName = "browser";
} else {
    runtimeName = "unknown";
}


export const VERSION = version;
export const NODE_VERSION = nodeVersion;
export const RUNTIME: Runtimes = runtimeName;
