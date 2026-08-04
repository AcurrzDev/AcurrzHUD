import "./SplitCard.css";

import { Component } from "../Component";

/**
 * Single split row.
 */
export class SplitCard extends Component<HTMLDivElement> {

    private readonly name: HTMLSpanElement;

    private readonly delta: HTMLSpanElement;

    public constructor(name: string) {

        super(document.createElement("div"));

        this.element.className = "split-card";

        this.name = document.createElement("span");
        this.name.className = "split-name";
        this.name.textContent = name;

        this.delta = document.createElement("span");
        this.delta.className = "split-delta";
        this.delta.textContent = "--";

        this.render();

    }

    public render(): void {

        this.element.replaceChildren(

            this.name,

            this.delta

        );

    }

    /**
     * Highlights the active split.
     */
    public setCurrent(current: boolean): void {

        this.element.classList.toggle(
            "current",
            current
        );

    }

}