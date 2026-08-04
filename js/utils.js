const AppState = {

    connected: false,

    timer: "0:00.00",

    comparison: "SUM OF BEST",

    comparisonTime: "--:--.--",

    pb: "--",

    bestPossible: "--",

    previousSegment: "--",

    timeSave: "--",

    phase: "NotRunning",

    splits: []

};

function $(id){

    return document.getElementById(id);

}