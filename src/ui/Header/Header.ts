import "./Header.css";

import { Component } from "../Component";

/**
 * Header widget displayed at the top of the HUD.
 */
export class Header extends Component<HTMLDivElement> {

    private readonly label: HTMLSpanElement;

    private readonly title: HTMLSpanElement;

    public constructor() {

        super(document.createElement("div"));

        this.element.className = "header";

        this.label = document.createElement("span");
        this.label.className = "header-label";
        this.label.textContent = "CURRENT SPLIT";

        this.title = document.createElement("span");
        this.title.className = "header-title";
        this.title.textContent = "Waiting for Run";

        this.render();

    }

    public render(): void {

        this.element.replaceChildren(

            this.label,

            this.title

        );

    }

    /**
     * Updates the displayed split name.
     */
    public setCurrentSplitName(name: string): void {

        if (!name || name === "-") {

            this.title.textContent = "Waiting for Run";

            return;

        }

        this.title.textContent = name;

    }

}