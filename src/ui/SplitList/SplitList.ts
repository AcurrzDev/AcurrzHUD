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

        this.render();

    }

    public render(): void {

        const names = [

            "Mumbo's Mountain",
            "Treasure Trove Cove",
            "Clanker's Cavern",
            "Bubblegloop Swamp",
            "Freezeezy Peak",
            "Gobi's Valley",
            "Mad Monster Mansion",
            "Rusty Bucket Bay",
            "Click Clock Wood"

        ];

        names.forEach((name, index) => {

            const card = new SplitCard(name);

            if(index === 0){

                card.setCurrent(true);

            }

            this.cards.push(card);

            this.element.appendChild(card.element);

        });

    }

}