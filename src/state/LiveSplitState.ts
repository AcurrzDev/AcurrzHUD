/**
 * Represents the current state of LiveSplit.
 */
export class LiveSplitState {

    public currentTime = "0:00.00";

    public currentSplit = -1;

    public currentSplitName = "";

    public comparison = "Personal Best";

    public bestPossible = "--";

    public timerPhase = "NotRunning";

    public splits: string[] = [];

}