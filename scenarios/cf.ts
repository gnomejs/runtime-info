import { RUNTIME } from "../mod.ts";

console.log("RUNTIME", RUNTIME);

export default {
    /**
     * @param {Request} request
     * @param {Env} env
     * @param {ExecutionContext} ctx
     * @returns {Response}
     */
    fetch(request: unknown, env: unknown, ctx: unknown) {
        console.log("Hello Cloudflare Workers!");

        return new Response(RUNTIME, {
            headers: {
                "content-type": "text/plain",
            },
        });
    },
};
