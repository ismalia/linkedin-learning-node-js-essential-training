process.stdout.write("Hello!\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite programming language?"
];
const answers = [];

function ask(i = 0) {
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write(" > ");
}

/* This is a weird take from the instructor in my opinion.
 * It's argued in LinkedIn Learning that, by calling ask() first, the program immediately prompts
 * the user with a question. The event listener (process.stdin.on("data")) is then set up to handle
 * the user's input, process it, and call ask() again for the next question.
 * This would theoretically ensure the correct flow of the program.
 * However, this approach doesn't consider potential race conditions if an event requires input
 * before the listener is set up.
 * From what I understand, a more robust approach would be to set up the event listeners first and
 * then call ask() to ensure that the program is ready to handle input as soon as it prompts the
 * user. But I might be wrong, idk.
 */
ask();

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());

    if (answers.length < questions.length)
        ask(answers.length);
    else
        process.exit();
});

process.on("exit", function() {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]}, ${answers[0]}! You can finish writing ${answers[2]} later.`);
});
