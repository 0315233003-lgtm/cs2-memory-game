console.log("Script started")

let guess = 0;
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    //print click to the console to make sure its working
    console.log("click");
    //Get the card by its Id and store it
    let card = document.getElementById(cardId);
    //Changes color to reveal the text of card
    card.style.color = "black";
    card.style.backgroundColor = "lightBlue";
    //check if this is their first choice
    if (firstCardId == "") {
        //store first card
        firstCardId = cardId;
        //check for match
        checkforaMatch();
    }




}

function checkForaMatch() {
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);
    console.log(card1);
    console.log(card2);
    if (card1.innerText == card2.innerText) {
        console.log("Match");
        card1.style.backgroundColor = "lightgreen";
        card2.style.backgroundColor = "lightgreen";
    }
    else {
        card1.style.backgroundcolor = "lightBlue";
        card2.style.backgroundcolor = "lightBlue";

    }
}