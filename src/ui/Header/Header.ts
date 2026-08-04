import "./Header.css";

import { Component } from "../Component";

/**
 * Header widget displayed at the top of the HUD.
 */
export class Header extends Component<HTMLDivElement> {

    private readonly title: HTMLSpanElement;
    private readonly comparison: HTMLSpanElement;

    public constructor() {

        super(document.createElement("div"));

        this.element.className = "header";

        this.title = document.createElement("span");
        this.title.className = "header-title";
        this.title.textContent = "SUM OF BEST";

        this.comparison = document.createElement("span");
        this.comparison.className = "header-time";
        this.comparison.textContent = "28:00.01";

        this.render();

    }

    public render(): void {

        this.element.replaceChildren(
            this.title,
            this.comparison
        );

    }

    public setComparison(time: string): void {

        this.comparison.textContent = time;

    }

}