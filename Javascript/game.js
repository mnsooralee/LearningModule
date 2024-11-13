let userScore = 0;
let pcScpre = 0;

// let choiceRock = document.querySelector(".rock");
// let choicePaper = document.querySelector(".paper");
// let choiceScissor = document.querySelector(".scissors");
//that was possible but not efficient specially if there was large number of choices

let choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {       
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked", choiceId);
    });
});

//let img = document.querySelector("#rock"); ids are working fine
//console.log(img);


//paused here
//to be continued