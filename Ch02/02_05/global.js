process.stdout.write("Hello!\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite programming language?"
];
let answers = [];

function ask(i = 0) {
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());

    if (answers.length < questions.length)
        ask(answers.length);
    else
        process.exit();
});

process.on("exit", function() {
    process.stdout.write(
        `\n\n\n\nGo ${answers[1]}, ${answers[0]}. You can finish writing ${answers[2]} later!`
    );
});

ask();
