await Bun.build({
    entrypoints: ["./index.ts"],
    compile: {
        outfile: "./terminal-shenanigans",
    },
});