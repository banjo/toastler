import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: ["src/index"],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
        commonjs: {
            transformMixedEsModules: true,
        },
    },
    failOnWarn: false,
});
