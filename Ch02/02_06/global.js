const waitTime = 3000;

console.log(`Setting a ${waitTime / 1000} seconds delay...`);

const timerFinished = () => console.log("Done!");

setTimeout(timerFinished, waitTime);
