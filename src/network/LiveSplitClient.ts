import type { Command } from "./Commands";

/**
 * LiveSplit Server WebSocket client.
 *
 * Handles only networking.
 */
export class LiveSplitClient {

    private socket?: WebSocket;

    private reconnectTimer?: number;

    private currentCommand?: Command;

    private readonly url: string;

    public onConnected?: () => void;

    public onDisconnected?: () => void;

    public onResponse?: (
        command: Command,
        response: string
    ) => void;

    public constructor(
        url = "ws://127.0.0.1:16834/livesplit"
    ) {

        this.url = url;

    }

    public connect(): void {

        console.info("[LiveSplit] Connecting...");

        this.socket = new WebSocket(this.url);

        this.socket.addEventListener("open", () => {

            console.info("[LiveSplit] Connected");

            this.onConnected?.();

        });

        this.socket.addEventListener("close", () => {

            console.warn("[LiveSplit] Disconnected");

            this.onDisconnected?.();

            window.clearTimeout(this.reconnectTimer);

            this.reconnectTimer = window.setTimeout(() => {

                this.connect();

            }, 3000);

        });

        this.socket.addEventListener("message", event => {

            if (!this.currentCommand) {

                console.warn(
                    "[LiveSplit] Received response with no pending command."
                );

                return;

            }

            const command = this.currentCommand;

            this.currentCommand = undefined;

            this.onResponse?.(
                command,
                event.data
            );

        });

        this.socket.addEventListener("error", () => {

            console.error("[LiveSplit] Connection Error");

        });

    }

    public request(command: Command): void {

        if (!this.socket) {

            return;

        }

        if (this.socket.readyState !== WebSocket.OPEN) {

            return;

        }

        if (this.currentCommand) {

            return;

        }

        this.currentCommand = command;

        this.socket.send(command);

    }

}