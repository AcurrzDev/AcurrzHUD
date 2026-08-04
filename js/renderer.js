function renderHUD(){

    $("comparison").textContent = AppState.comparison;

    $("comparisonTime").textContent = AppState.comparisonTime;

    $("pbTime").textContent = AppState.pb;

    $("bestPossible").textContent = AppState.bestPossible;

    $("previousSegment").textContent = AppState.previousSegment;

    $("timeSave").textContent = AppState.timeSave;

    renderTimer();

    renderSplits();

}