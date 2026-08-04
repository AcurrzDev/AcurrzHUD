import "./Panel.css";

import { Component } from "../Component";

/**
 * Reusable HUD panel.
 */
export class Panel extends Component<HTMLDivElement> {

    private readonly body: HTMLDivElement;

    public constructor(title?: string) {

        super(document.createElement("div"));

        this.element.className = "panel";

        if (title) {

            const header = document.createElement("div");

            header.className = "panel-title";

            header.textContent = title.toUpperCase();

            this.element.appendChild(header);

        }

        this.body = document.createElement("div");

        this.body.className = "panel-body";

        this.element.appendChild(this.body);

        this.render();

    }

    public render(): void {
        // Base panel does not render dynamic content.
    }

    public setContent(...children: HTMLElement[]): void {

        this.body.replaceChildren(...children);

    }

}