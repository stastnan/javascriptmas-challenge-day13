// Task:
// - Write the code to help a user choose the perfect Christmas dinner idea
//   based on the number of people attending.
// - Include a checkbox for the user to specify the meal
//   should be vegetarian-friendly.

// Dinner suggestions (or choose your own!):
// Vegetarian: Winter Squash Risotto
// 4 people or less: Ham
// 5+ people: Turkey

const vegetarian = "Winter Squash Risotto";
const forFour = "Ham";
const forFive = "Turkey";

const noGuests =
  " unknown! Don't bother cooking if no one is coming. Enjoy your free time. Merry Christmas!";

const food = document.getElementById("food");

function gimmeFood() {
  const veggeCheck = document.getElementById("vegetarian-input");
  const guestInputValue = document.getElementById("num-input").value;

  if (guestInputValue && guestInputValue > 0) {
    if (veggeCheck.checked) {
      return vegetarian;
    } else if (guestInputValue >= 5) {
      return forFive;
    } else if (guestInputValue < 5) {
      return forFour;
    }
  } else {
    return noGuests;
  }
}

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  food.innerText = gimmeFood();
});

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
