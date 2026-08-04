import "./SplitList.css";

import { Component } from "../Component";
import { SplitCard } from "./SplitCard";

/**
 * Displays every split.
 */
export class SplitList extends Component<HTMLDivElement> {

    private readonly cards: SplitCard[] = [];

    public constructor() {

        super(document.createElement("div"));

        this.element.className = "split-list";

        this.element.style.flex = "1";

        this.render();

    }

    /**
     * Required by Component.
     */
    public render(): void {

        this.setSplits([]);

    }

    /**
     * Rebuilds the split list.
     */
    public setSplits(names: readonly string[]): void {

        this.cards.length = 0;

        this.element.replaceChildren();

        for (const name of names) {

            const card = new SplitCard(name);

            this.cards.push(card);

            this.element.appendChild(card.element);

        }

    }

    /**
     * Highlights the active split.
     */
    public setCurrentSplit(index: number): void {

        this.cards.forEach((card, i) => {

            card.setCurrent(i === index);

        });

    }

}