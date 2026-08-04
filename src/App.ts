export class App {

    private readonly root: HTMLDivElement;

    public constructor() {

        const element = document.getElementById("app");

        if (!(element instanceof HTMLDivElement)) {
            throw new Error('Root element "#app" was not found.');
        }

        this.root = element;
    }

    public start(): void {

        console.log("AcurrzHUD v0.1.0");

        this.root.innerHTML = "";

        const title = document.createElement("div");

        title.className = "hud-title";

        title.textContent = "AcurrzHUD";

        this.root.appendChild(title);

    }

}