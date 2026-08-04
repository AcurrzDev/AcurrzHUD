/**
 * LiveSplit commands.
 */

export const Commands = {

    CurrentTime: "getcurrenttime",

    SplitIndex: "getsplitindex",

    CurrentSplitName: "getcurrentsplitname",

    PreviousSplitName: "getprevioussplitname",

    Comparison: "getcomparison",

    BestPossibleTime: "getbestpossibletime",

    TimerPhase: "getcurrenttimerphase",

    Splits: "getsplits"

} as const;

export type Command =
    (typeof Commands)[keyof typeof Commands];