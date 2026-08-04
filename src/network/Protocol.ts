import { Commands } from "./Commands";
import { LiveSplitState } from "../state/LiveSplitState";

/**
 * Converts LiveSplit command responses
 * into application state.
 */
export class Protocol {
    private readonly state: LiveSplitState;

    public constructor(state: LiveSplitState) {
        this.state = state;
    }

    public handle(command: string, value: string): void {
        switch (command) {
            case Commands.CurrentTime:
                this.state.currentTime = value.trim();

                break;

            case Commands.SplitIndex:
                this.state.currentSplit = Number(value.trim());

                break;

            case Commands.CurrentSplitName:
                this.state.currentSplitName = value.trim();

                break;

            case Commands.Comparison:
                this.state.comparison = value.trim();

                break;

            case Commands.BestPossibleTime:
                this.state.bestPossible = value.trim();

                break;

            case Commands.Splits:
                this.state.splits = value
                    .split("\n")
                    .map((split) => split.trim())
                    .filter((split) => split.length > 0);

                break;
            case Commands.TimerPhase:
                this.state.timerPhase = value.trim();

                break;

            default:
                console.warn(`[Protocol] Unhandled command: ${command}`, value);

                break;
        }
    }
}
