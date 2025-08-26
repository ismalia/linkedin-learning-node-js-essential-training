process.stdout.write("Hello\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite programming language?"
];
const answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on("data", function(data) {
    process.stdout.write(`${data.toString().trim()}\n`);
});

ask(answers.length);
