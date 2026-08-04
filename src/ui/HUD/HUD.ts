import "./HUD.css";

import { Component } from "../Component";
import { Header } from "../Header/Header";
import { Panel } from "../Panel/Panel";

/**
 * Root HUD component.
 */
export class HUD extends Component<HTMLDivElement> {

    private readonly header: Header;
    private readonly splitPanel: Panel;
    private readonly timerPanel: Panel;
    private readonly footerPanel: Panel;

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