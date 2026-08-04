function renderTimer(){

    const pieces = AppState.timer.split(".");

    $("minutes").textContent = pieces[0];

    $("milliseconds").textContent = "." + (pieces[1] ?? "00");

}