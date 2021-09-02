// Storing required elements
const toggleBoxBtn = document.querySelector(".pricingToggleBox .toggleBoxBtn");
const pricingCards = document.querySelector(".pricing .pricingCards");
let boxPrices = document.querySelectorAll(".cardBox .boxPrice");

toggleBoxBtn.addEventListener("click", function () {
    toggleBoxBtn.classList.toggle("checked");
    pricingCards.classList.toggle("checked");

    changePrice();
});

function changePrice() {
    if (pricingCards.classList.contains("checked")) {
        for (let boxPrice of boxPrices) {
            let firstTwo = boxPrice.textContent[1] + boxPrice.textContent[2];
            boxPrice.innerHTML = `<span class="priceDollar">&dollar;</span>${
                firstTwo + "9.99"
            }`;
        }
    } else {
        for (let boxPrice of boxPrices) {
            let firstTwo = boxPrice.textContent[1] + boxPrice.textContent[2];
            boxPrice.innerHTML = `<span class="priceDollar">&dollar;</span>${
                firstTwo + ".99"
            }`;
        }
    }
}
