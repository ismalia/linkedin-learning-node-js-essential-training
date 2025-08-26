const waitTime = 3000;

console.log(`Setting a ${waitTime / 1000} seconds delay...`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Waiting... 100%");
    console.log("Done.");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting... ${p}%`);
};

const interval = setInterval(incTime, waitInterval);
