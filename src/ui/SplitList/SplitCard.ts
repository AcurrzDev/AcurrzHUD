import "./SplitCard.css";

import { Component } from "../Component";

/**
 * Represents a single split in the HUD.
 */
export class SplitCard extends Component<HTMLDivElement> {

    private readonly nameElement: HTMLSpanElement;

    private readonly deltaElement: HTMLSpanElement;

    private current = false;

    public constructor(name: string) {

        super(document.createElement("div"));

        this.element.className = "split-card";

        this.nameElement = document.createElement("span");
        this.nameElement.className = "split-name";
        this.nameElement.textContent = name;

        this.deltaElement = document.createElement("span");
        this.deltaElement.className = "split-delta";
        this.deltaElement.textContent = "--";

        this.element.append(
            this.nameElement,
            this.deltaElement
        );

    }

    public render(): void {
        // Static component.
    }

    public setDelta(delta: string): void {

        this.deltaElement.textContent = delta;

    }

    public setCurrent(current: boolean): void {

        this.current = current;

        this.element.classList.toggle(
            "current",
            current
        );

    }

    public setAhead(): void {

        this.deltaElement.className =
            "split-delta ahead";

    }

    public setBehind(): void {

        this.deltaElement.className =
            "split-delta behind";

    }

}