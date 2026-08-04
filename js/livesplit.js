function initializeSubscriptions(){

    const commands = [

        "getcurrenttime",
        "getsplitindex",
        "getsplitname",
        "getsplitnames",
        "getcomparison",
        "getcomparisons",
        "getbestpossibletime",
        "getdelta",
        "gettimerphase",
        "getattemptcount",
        "getcurrenttimerphase",
        "getgame",
        "getcategory",
        "getbestsegments",
        "getbestsplittimes"

    ];

    commands.forEach(c => send(c));

}

function handleLiveSplitMessage(message){

    console.log("LiveSplit >", message);

}