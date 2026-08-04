import "./Timer.css";

import { Component } from "../Component";

/**
 * Main run timer widget.
 */
export class Timer extends Component<HTMLDivElement> {
    private readonly mainTime: HTMLDivElement;

    private readonly milliseconds: HTMLSpanElement;

    private readonly pbValue: HTMLSpanElement;

    private readonly bestValue: HTMLSpanElement;

    public constructor() {
        super(document.createElement("div"));

        this.element.className = "timer";

        const display = document.createElement("div");
        display.className = "timer-display";

        this.mainTime = document.createElement("div");
        this.mainTime.className = "timer-main";
        this.mainTime.textContent = "0:00";

        this.milliseconds = document.createElement("span");
        this.milliseconds.className = "timer-ms";
        this.milliseconds.textContent = ".00";

        display.append(this.mainTime, this.milliseconds);

        const divider = document.createElement("div");
        divider.className = "timer-divider";

        const pbRow = document.createElement("div");
        pbRow.className = "timer-row";

        const pbLabel = document.createElement("span");
        pbLabel.textContent = "PB";

        this.pbValue = document.createElement("span");
        this.pbValue.textContent = "--";

        pbRow.append(pbLabel, this.pbValue);

        const bestRow = document.createElement("div");
        bestRow.className = "timer-row";

        const bestLabel = document.createElement("span");
        bestLabel.textContent = "BEST";

        this.bestValue = document.createElement("span");
        this.bestValue.textContent = "--";

        bestRow.append(bestLabel, this.bestValue);

        this.element.append(display, divider, pbRow, bestRow);
    }

    public render(): void {}

    /**
     * Updates the displayed timer.
     */
    public setTime(time: string): void {
        const split = time.trim().split(".");

        this.mainTime.textContent = split[0];

        const milliseconds = (split[1] ?? "00").padEnd(2, "0").substring(0, 2);

        this.milliseconds.textContent = "." + milliseconds;
    }

    public setPersonalBest(time: string): void {

    const split = time.trim().split(".");

    const milliseconds =
        (split[1] ?? "00")
            .padEnd(2, "0")
            .substring(0, 2);

    this.pbValue.textContent =
        split[0] + "." + milliseconds;

}

    public setBestPossible(time: string): void {

    const split = time.trim().split(".");

    const milliseconds =
        (split[1] ?? "00")
            .padEnd(2, "0")
            .substring(0, 2);

    this.bestValue.textContent =
        split[0] + "." + milliseconds;

}
}
