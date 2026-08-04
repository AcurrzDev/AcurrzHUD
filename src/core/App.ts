import { Renderer } from "./Renderer.ts";
import { HUD } from "../ui/HUD/HUD.ts";

/**
 * Root application controller.
 */
export class App {

    private readonly renderer: Renderer;

    public constructor() {

        const root = document.querySelector<HTMLDivElement>("#app");

        if (!root) {
            throw new Error("Missing #app element.");
        }

        this.renderer = new Renderer(root);

    }

    public start(): void {

        console.info("AcurrzHUD v0.1.0");

        const hud = new HUD();

        this.renderer.mount(hud.element);

    }

}