import { Renderer } from "./Renderer";

import { HUD } from "../ui/HUD/HUD";

import { LiveSplitClient } from "../network/LiveSplitClient";
import { Commands, type Command } from "../network/Commands";

import { LiveSplitState } from "../state/LiveSplitState";
import { Protocol } from "../network/Protocol";

/**
 * Root application controller.
 */
export class App {
    private readonly renderer: Renderer;

    private readonly client: LiveSplitClient;

    private readonly state: LiveSplitState;

    private readonly protocol: Protocol;

    private readonly hud: HUD;

    /**
     * Commands to poll.
     *
     * CurrentTime is intentionally requested much more
     * frequently than the others to keep the timer smooth.
     */
    private readonly commands: readonly Command[] = [
        Commands.CurrentTime,
        Commands.CurrentTime,
        Commands.CurrentTime,

        Commands.SplitIndex,

        Commands.CurrentTime,

        Commands.CurrentSplitName,

        Commands.CurrentTime,

        Commands.TimerPhase,

        Commands.CurrentTime,

        Commands.BestPossibleTime,
    ];

    private commandIndex = 0;

    public constructor() {
        const root = document.querySelector<HTMLDivElement>("#app");

        if (!root) {
            throw new Error("Missing #app element.");
        }

        this.renderer = new Renderer(root);

        this.client = new LiveSplitClient();

        this.state = new LiveSplitState();

        this.protocol = new Protocol(this.state);

        this.hud = new HUD();
    }

    public start(): void {
        console.info("AcurrzHUD");

        this.renderer.mount(this.hud.element);

        this.client.onConnected = () => {
            console.info("Connected to LiveSplit.");

            this.requestNext();
        };

        this.client.onDisconnected = () => {
            console.warn("Disconnected from LiveSplit.");
        };

        this.client.onResponse = (command, response) => {
            this.protocol.handle(command, response);

            this.refreshHud();

            window.setTimeout(() => {
                this.requestNext();
            }, 16);
        };

        this.client.connect();
    }

    private requestNext(): void {
        const command = this.commands[this.commandIndex];

        this.client.request(command);

        this.commandIndex++;

        if (this.commandIndex >= this.commands.length) {
            this.commandIndex = 0;
        }
    }

    private refreshHud(): void {
        this.hud.setCurrentTime(this.state.currentTime);

        this.hud.setBestPossible(this.state.bestPossible);

        this.hud.setCurrentSplit(this.state.currentSplit);

        this.hud.setCurrentSplitName(this.state.currentSplitName);
    }
}
