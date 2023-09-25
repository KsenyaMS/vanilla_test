let index = 0;
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
            cardImg.src = "./static/css/cardImage.png";
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
        console.log({index});
        let cards = [];
        cards = json.slice(index, json.length > 30+index ? 30+index : json.length);
        index = index + 30;
        console.log({cards});
        if (index >= json.length) {
            $('.footer').hide();
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
            cardImg.src = "./static/css/cardImage.png";
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
