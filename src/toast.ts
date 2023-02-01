import { isBrowser, select } from "@banjoanton/utils";
import { backgroundColor, color, defaultOptions, icons } from "./defaults";
import { Options } from "./types";

/**
 * Show a toast message. If a toast is already showing, it will be removed and replaced with the new one.
 * @param message - The message to show.
 * @param options - The options to use.
 * @returns - An object with a remove method to remove the toast.
 * @example
 * toast("Hello world");
 * toast("Hello world", { time: 10000, type: "error", timing: 500, fontSize: "1.5rem" });
 *
 * const { remove } = toast("Hello world");
 * remove();
 */
export const toast = (message: string, options?: Options) => {
    if (!isBrowser()) throw new Error("toast can only be used in a browser");

    const { duration, type, animationTiming, fontSize, width, useIcon } = {
        ...defaultOptions,
        ...options,
    };

    const toast = document.createElement("div");
    toast.classList.add("banjo-toast");
    toast.dataset.type = type!;
    toast.dataset.duration = duration!.toString();
    toast.style.cssText = `
        transition: all ${animationTiming}ms ease;
        font-size: ${fontSize};
        width: ${width};
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        height: fit-content;
        transform: translateX(200%);
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        z-index: 9999;
        `;

    toast.style.backgroundColor = backgroundColor[type!];
    toast.style.color = color[type!];

    if (useIcon) {
        const icon = document.createElement("i");
        icon.classList.add("banjo-toast-icon");
        icon.innerHTML = icons[type!];
        toast.appendChild(icon);
    }

    toast.appendChild(document.createTextNode(message));
    document.body.appendChild(toast);

    const show = () => {
        toast.style.transform = "translateX(0%)";
    };

    const hide = (element = toast, beforeRemove = 5000) => {
        element.style.transform = "translateX(200%)";
        setTimeout(() => {
            element.parentNode?.removeChild(element);
        }, beforeRemove);
    };

    toast.addEventListener("click", () => {
        hide();
    });

    if (select.exists(".banjo-toast")) {
        const oldToasts = select.all<HTMLDivElement>(".banjo-toast");
        oldToasts.forEach((oldToast) => {
            const dur = oldToast.dataset.duration;
            hide(oldToast, Number(dur) + animationTiming! ?? 5000);
        });
    }

    setTimeout(show, animationTiming);
    setTimeout(hide, duration);

    return { hide: () => hide() };
};
