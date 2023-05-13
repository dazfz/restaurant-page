export const createHome = () => {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Our Pizza Restaurant!";

  const description = document.createElement("p");
  description.textContent =
    "At our pizza restaurant, we strive to provide the most delicious and authentic pizzas made with the freshest ingredients. Whether you prefer classic Margherita, savory Pepperoni, or tropical Hawaiian, we have a wide range of flavors to satisfy your cravings. Come and enjoy our mouthwatering pizzas that are crafted with passion and served with a smile.";

  const pizzaImage = document.createElement("img");
  pizzaImage.src = "pizza.jpg";
  pizzaImage.alt = "Delicious Pizza";

  content.appendChild(heading);
  content.appendChild(description);
  content.appendChild(pizzaImage);
};
