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

        this.timer.setTime("0:00.00");
        this.timer.setPersonalBest("28:14.56");
        this.timer.setBestPossible("27:58.31");

        this.splitList = new SplitList();

        this.splitPanel.setContent(this.splitList.element);

        this.timerPanel.setContent(this.timer.element);

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

}