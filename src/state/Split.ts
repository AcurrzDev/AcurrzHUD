/**
 * Visual state of a split.
 */
export const SplitStates = {

    Idle: "idle",

    Current: "current",

    Ahead: "ahead",

    Behind: "behind",

    Gold: "gold",

    Complete: "complete"

} as const;

/**
 * Union type of all valid split states.
 */
export type SplitState =
    (typeof SplitStates)[keyof typeof SplitStates];

/**
 * Represents a split displayed by the HUD.
 */
export interface Split {

    name: string;

    delta: string;

    state: SplitState;

}