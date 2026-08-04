import "./HUD.css";

import { Component } from "../Component";
import { Header } from "../Header/Header";
import { Panel } from "../Panel/Panel";
import { Timer } from "../Timer/Timer";
import { SplitList } from "../SplitList/SplitList";

/**
 * Root HUD component.
 */
export class HUD extends Component<HTMLDivElement> {

    private readonly header: Header;

    private readonly splitPanel: Panel;

    private readonly timerPanel: Panel;

    private readonly footerPanel: Panel;

    private readonly timer: Timer;

    private readonly splitList: SplitList;

    public constructor() {

        super(document.createElement("div"));

        this.element.className = "hud";

        this.header = new Header();

        this.splitPanel = new Panel();
        this.splitPanel.element.classList.add("splits-panel");

        this.timerPanel = new Panel();
        this.timerPanel.element.classList.add("timer-panel");

        this.footerPanel = new Panel();
        this.footerPanel.element.classList.add("footer-panel");

        this.timer = new Timer();

        this.splitList = new SplitList();

        // Default placeholder splits until LiveSplit provides them.
        this.splitList.setSplits([
            "Mumbo's Mountain",
            "Treasure Trove Cove",
            "Clanker's Cavern",
            "Bubblegloop Swamp",
            "Freezeezy Peak",
            "Gobi's Valley",
            "Mad Monster Mansion",
            "Rusty Bucket Bay",
            "Click Clock Wood"
        ]);

        this.splitPanel.setContent(
            this.splitList.element
        );

        this.timerPanel.setContent(
            this.timer.element
        );

        this.render();

    }

    public render(): void {

        this.element.replaceChildren(

            this.header.element,

            this.splitPanel.element,

            this.timerPanel.element,

            this.footerPanel.element

        );

    }

    /**
     * Updates the main timer.
     */
    public setCurrentTime(time: string): void {

        this.timer.setTime(time);

    }

    /**
     * Updates the Best Possible Time.
     */
    public setBestPossible(time: string): void {

        this.timer.setBestPossible(time);

    }

    /**
     * Updates the Personal Best.
     */
    public setPersonalBest(time: string): void {

        this.timer.setPersonalBest(time);

    }

    /**
     * Replaces the displayed split list.
     */
    public setSplits(names: readonly string[]): void {

        this.splitList.setSplits(names);

    }

    /**
     * Highlights the current split.
     */
    public setCurrentSplit(index: number): void {

        this.splitList.setCurrentSplit(index);

    }

    /**
 * Updates the header split name.
 */
public setCurrentSplitName(name: string): void {

    this.header.setCurrentSplitName(name);

}

}