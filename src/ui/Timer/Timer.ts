import "./Timer.css";

import { Component } from "../Component";

/**
 * Primary run timer widget.
 *
 * This widget is responsible only for displaying
 * timing information. It has no knowledge of
 * LiveSplit or networking.
 */
export class Timer extends Component<HTMLDivElement> {

    private readonly timeElement: HTMLDivElement;

    private readonly millisecondsElement: HTMLSpanElement;

    private readonly personalBestValue: HTMLSpanElement;

    private readonly bestPossibleValue: HTMLSpanElement;

    public constructor() {

        super(document.createElement("div"));

        this.element.className = "timer";

        const timerContainer = document.createElement("div");
        timerContainer.className = "timer-display";

        this.timeElement = document.createElement("div");
        this.timeElement.className = "timer-main";
        this.timeElement.textContent = "0:00";

        this.millisecondsElement = document.createElement("span");
        this.millisecondsElement.className = "timer-ms";
        this.millisecondsElement.textContent = ".00";

        timerContainer.append(
            this.timeElement,
            this.millisecondsElement
        );

        const personalBestRow = document.createElement("div");
        personalBestRow.className = "timer-row";

        const personalBestLabel = document.createElement("span");
        personalBestLabel.textContent = "PB";

        this.personalBestValue = document.createElement("span");
        this.personalBestValue.textContent = "--";

        personalBestRow.append(
            personalBestLabel,
            this.personalBestValue
        );

        const bestPossibleRow = document.createElement("div");
        bestPossibleRow.className = "timer-row";

        const bestPossibleLabel = document.createElement("span");
        bestPossibleLabel.textContent = "BEST";

        this.bestPossibleValue = document.createElement("span");
        this.bestPossibleValue.textContent = "--";

        bestPossibleRow.append(
            bestPossibleLabel,
            this.bestPossibleValue
        );

        this.element.append(
            timerContainer,
            personalBestRow,
            bestPossibleRow
        );

        this.render();

    }

    public render(): void {

        // Static widget.
        // Dynamic updates happen through setters.

    }

    /**
     * Updates the displayed timer.
     */
    public setTime(time: string): void {

        const split = time.split(".");

        this.timeElement.textContent = split[0];

        this.millisecondsElement.textContent =
            "." + (split[1] ?? "00");

    }

    /**
     * Updates the personal best.
     */
    public setPersonalBest(value: string): void {

        this.personalBestValue.textContent = value;

    }

    /**
     * Updates the best possible time.
     */
    public setBestPossible(value: string): void {

        this.bestPossibleValue.textContent = value;

    }

}