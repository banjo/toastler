export type Type = "success" | "error" | "warning";
export type typeMap = Record<Type, string>;
export type Options = {
    /**
     * The time to show the toast for in milliseconds. Defaults to 5000.
     * @default 5000
     */
    duration?: number;

    /**
     * The type of toast. Either "success" or "error".
     * @default "success"
     */
    type?: Type;

    /**
     * The timing to use for the animation. Defaults to 300.
     * @default 300
     */
    animationTiming?: number;

    /**
     * The font size to use. Defaults to 1.2rem.
     * @default 1.2rem
     */
    fontSize?: string;

    /**
     * The width for the toast container. Defaults to 'fit-content'.
     * @default 'fit-content'
     */
    width?: string;

    /**
     * Whether to show the icon. Defaults to true.
     * @default true
     */
    useIcon?: boolean;
};
