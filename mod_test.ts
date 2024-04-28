import { assertEquals as equals, assert as ok, assertFalse as no } from "jsr:@std/assert@^0.224.0";
import { RUNTIME, IS_BROWSER, IS_BUN, IS_DENO, IS_NODE, IS_CLOUDFLARE, IS_NODELIKE } from "./mod.ts";

Deno.test("runtime", () => {
    equals(RUNTIME, "deno");
    no(IS_BUN);
    no(IS_NODE);
    no(IS_BROWSER);
    no(IS_CLOUDFLARE);
    no(IS_NODELIKE);
    ok(IS_DENO);
});

Deno.test("deno scenario", async () => {
    const cmd = new Deno.Command("deno", {
        args: ["run", "-A", "./scenarios/bun.ts"],
        stdout: "piped",
        stderr: "piped",
    });

    const output = await cmd.output();
    const decoder = new TextDecoder();
    const text = decoder.decode(output.stdout);

    equals(text, "deno\n");
});

Deno.test("node scenario", async () => {
    const cmd = new Deno.Command("ts-node", {
        args: ["./scenarios/node.ts"],
        stdout: "piped",
        stderr: "piped",
    });

    const output = await cmd.output();
    const decoder = new TextDecoder();
    const text = decoder.decode(output.stdout);

    equals(text, "node\n");
});

Deno.test("bun scenario", async () => {
    const cmd = new Deno.Command("bun", {
        args: ["./scenarios/bun.ts"],
        stdout: "piped",
        stderr: "piped",
    });

    const output = await cmd.output();
    const decoder = new TextDecoder();
    const text = decoder.decode(output.stdout);

    equals(text, "bun\n");
});
