import { assertEquals as equals } from "jsr:@std/assert@^0.224.0";


Deno.test("deno", async () => {
    const cmd = new Deno.Command('deno', {
        args: ["run", "-A", './plat/bun.ts'],
        stdout: 'piped',
        stderr: 'piped',
    });

    const output = await cmd.output();
    const decoder = new TextDecoder();
    const text = decoder.decode(output.stdout);

    equals(text, "deno\n");
});

Deno.test("node", async () => {
    const cmd = new Deno.Command('ts-node', {
        args: ['./plat/node.ts'],
        stdout: 'piped',
        stderr: 'piped',
    });

    const output = await cmd.output();
    const decoder = new TextDecoder();
    const text = decoder.decode(output.stdout);

    equals(text, "node\n");
})

Deno.test("bun", async () => {
    const cmd = new Deno.Command('bun', {
        args: ['./plat/bun.ts'],
        stdout: 'piped',
        stderr: 'piped',
    });

    const output = await cmd.output();
    const decoder = new TextDecoder();
    const text = decoder.decode(output.stdout);

    equals(text, "bun\n");
});