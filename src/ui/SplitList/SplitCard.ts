import "./SplitCard.css";

import { Component } from "../Component";

/**
 * Individual split entry.
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

    public setName(name: string): void {

        this.name.textContent = name;

    }

    public setDelta(delta: string): void {

        this.delta.textContent = delta;

    }

    public setCurrent(current: boolean): void {

        this.element.classList.toggle(
            "current",
            current
        );

    }

    public setAhead(): void {

        this.delta.className = "split-delta ahead";

    }

    public setBehind(): void {

        this.delta.className = "split-delta behind";

    }

    public setGold(): void {

        this.delta.className = "split-delta gold";

    }

    public clearState(): void {

        this.delta.className = "split-delta";

    }

}