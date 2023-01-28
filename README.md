# :bread: toastler

![toast example](https://i.imgur.com/4Z1zxop.gif)

[![NPM version](https://img.shields.io/npm/v/toastler?color=%23c53635&label=%20)](https://www.npmjs.com/package/toastler)

A lightweight and simple toast notification library for the browser. 

-   :palm_tree: - Three-shakable ESM modules.
-   :speech_balloon: - Fully typed TSDocs with examples
-   :star: - No dependencies
-   :file_folder: - Super lightweight (<15kb)
-   :movie_camera: - Simple animations
-   :white_check_mark: - Simple API and usage
-   :gear: - Customizable with nice defaults
-   :large_blue_circle: - Written in TypeScript

Mostly used in basic JavaScript/TypeScript projects where you want a simple toast/snackbar without having external dependencies or a large third-party library.

## Usage

```ts
// import using ESM or CJS
import { toast } from "toastler";
const { toast } = require("toastler");

// Simple defaults
toast("Hello world");

// Highly customizable
toast("Hello world", { 
    duration: 10000, 
    type: "error", 
    animationTiming: 500, 
    fontSize: "1.5rem"
    //... 
    });

// Simple to remove
const { hide } = toast("Hello world");
hide();

// New toasts will remove old ones
toast("First toast");
setTimeout(() => {
    // This toast will hide the first toast before it is showed
    toast("Second toast");
}, 2000)
```