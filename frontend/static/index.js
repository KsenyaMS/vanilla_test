let index = 0;
let maxCount = 30;
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((json) => {
        let cards = json.slice(index, json.length > 10 ? 10 : json.length);
        index = 10;
        var cardsContainer = document.querySelector(".content__card-list");
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var cardElement = document.createElement("div");
            cardElement.className = "content__card";
            
            var cardContent = document.createElement("div");
            cardContent.className = "content__card__text";
            
            var cardImg = document.createElement("img");
            cardImg.className = "content__img";
            cardImg.src = "./frontend/static/css/cardImage.png";
            cardImg.alt = "Card image";
            
            var cardContentName = document.createElement("p");
            cardContentName.className = "content__card__text__name";
            cardContentName.textContent = "BRIDGE";
            
            var cardContentTitle = document.createElement("div");
            cardContentTitle.className = "content__card__text__title";
            cardContentTitle.textContent = card.title;
            
            var cardContentDescription = document.createElement("div");
            cardContentDescription.className = "content__card__text__full-text";
            cardContentDescription.textContent = card.body;
            
            var cardButtonContainer = document.createElement("div");
            cardButtonContainer.className = "content__card__button-container";
            
            var cardContentButton = document.createElement("button");
            cardContentButton.className = "content__card__button";
            cardContentButton.textContent = "Continue reading";

            cardContent.appendChild(cardContentName);
            cardContent.appendChild(cardContentTitle);
            cardContent.appendChild(cardContentDescription);

            cardElement.appendChild(cardImg);
            cardElement.appendChild(cardContent);
            cardElement.appendChild(cardButtonContainer);

            cardButtonContainer.appendChild(cardContentButton);

            cardsContainer.appendChild(cardElement);
        }
    });

function showCards()
{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((json) => {
        let cards = [];
        cards = json.slice(0, 30);
        cards = cards.slice(index, cards.length > 5+index ? 5+index : cards.length);
        index = index + 5;
        if (index >= 30) {
            document.getElementById("footer").style.display = "none";
        }
        var cardsContainer = document.querySelector(".content__card-list");
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var cardElement = document.createElement("div");
            cardElement.className = "content__card";
            
            var cardContent = document.createElement("div");
            cardContent.className = "content__card__text";
            
            var cardImg = document.createElement("img");
            cardImg.className = "content__img";
            cardImg.src = "./frontend/static/css/cardImage.png";
            cardImg.alt = "Card image";
            
            var cardContentName = document.createElement("p");
            cardContentName.className = "content__card__text__name";
            cardContentName.textContent = "BRIDGE";
            
            var cardContentTitle = document.createElement("div");
            cardContentTitle.className = "content__card__text__title";
            cardContentTitle.textContent = card.title;
            
            var cardContentDescription = document.createElement("div");
            cardContentDescription.className = "content__card__text__full-text";
            cardContentDescription.textContent = card.body;
            
            var cardButtonContainer = document.createElement("div");
            cardButtonContainer.className = "content__card__button-container";
            
            var cardContentButton = document.createElement("button");
            cardContentButton.className = "content__card__button";
            cardContentButton.textContent = "Continue reading";

            cardContent.appendChild(cardContentName);
            cardContent.appendChild(cardContentTitle);
            cardContent.appendChild(cardContentDescription);

            cardElement.appendChild(cardImg);
            cardElement.appendChild(cardContent);
            cardElement.appendChild(cardButtonContainer);

            cardButtonContainer.appendChild(cardContentButton);

            cardsContainer.appendChild(cardElement);
        }
    });
}

let status = false;
function collapseMenu()
{
    status = !status;
    document.getElementById("footer").style.display = "none";
    if (status === true) {
        document.getElementById("mobile-menu").style.display = "block";
        document.getElementById("content").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("inform-picture").style.display = "none";
    }
    else if (status === false) {
        document.getElementById("mobile-menu").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("footer").style.display = "block";
        document.getElementById("inform-picture").style.display = "block";
    }

}


function check()
{
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    if (username === "") alert("Введите имя пользователя!");
    else if (!/^[a-zA-Z]{20}$/.test(username)) alert("Некорректное имя пользователя!");
    if (email === "") alert("Введите email!");
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) alert("Некорректный адрес электронной почты!");
    if (phone === "") alert("Введите номер телефона!");
    else if (!/^[0-9]{11}$/.test(phone)) alert("Некорректный номер телефона!");
}
