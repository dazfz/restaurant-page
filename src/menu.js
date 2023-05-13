export const createMenu = () => {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Our Pizza Menu";

  const menuList = document.createElement("ul");

  const pizzaItem1 = document.createElement("li");
  const pizzaImage1 = document.createElement("img");
  pizzaImage1.src = "margherita.jpg";
  pizzaItem1.appendChild(pizzaImage1);
  pizzaItem1.innerHTML += "Margherita Pizza - $10";

  const pizzaItem2 = document.createElement("li");
  const pizzaImage2 = document.createElement("img");
  pizzaImage2.src = "pepperoni.jpg";
  pizzaItem2.appendChild(pizzaImage2);
  pizzaItem2.innerHTML += "Pepperoni Pizza - $12";

  const pizzaItem3 = document.createElement("li");
  const pizzaImage3 = document.createElement("img");
  pizzaImage3.src = "hawaiian.jpg";
  pizzaItem3.appendChild(pizzaImage3);
  pizzaItem3.innerHTML += "Hawaiian Pizza - $15";

  const pizzaItem4 = document.createElement("li");
  const pizzaImage4 = document.createElement("img");
  pizzaImage4.src = "margherita_extra.jpg";
  pizzaItem4.appendChild(pizzaImage4);
  pizzaItem4.innerHTML += "Margherita Extra Pizza - $12";

  const pizzaItem5 = document.createElement("li");
  const pizzaImage5 = document.createElement("img");
  pizzaImage5.src = "supreme.jpg";
  pizzaItem5.appendChild(pizzaImage5);
  pizzaItem5.innerHTML += "Supreme Pizza - $14";

  menuList.appendChild(pizzaItem1);
  menuList.appendChild(pizzaItem2);
  menuList.appendChild(pizzaItem3);
  menuList.appendChild(pizzaItem4);
  menuList.appendChild(pizzaItem5);

  content.appendChild(heading);
  content.appendChild(menuList);
};
