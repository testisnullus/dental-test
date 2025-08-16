function checkQuiz() {
    const answers = {
        q1: "b",
        q2: "a"
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let q in answers) {
        let selected = document.querySelector(`input[name=${q}]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        `<p>You scored ${score} out of ${total}.</p>`;
}
