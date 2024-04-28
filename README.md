# @gnome/runtime-info

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

JavaScript runtime detection which is useful for writing
compatability layers in modules for different runtimes.

## Basic Usage

```typescript
import { RUNTIME, IS_BUN, IS_DENO, IS_NODE, IS_BROWSER, IS_CLOUDFLARE } from "@gnome/runtime-info";

console.log(RUNTIME);
console.log("bun", IS_BUN);
console.log("deno", IS_DENO);
console.log("node", IS_NODE);
console.log("browser", IS_BROWSER);
console.log("cloudflare", IS_CLOUDFLARE);
```

[MIT License](./LICENSE.md)
