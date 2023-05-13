import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const clear = () => {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

// funcion para crear cada tab, recibe texto y la funcion que ejecutara (la pagina)
const createButton = (text, pageFn) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("tab");

  button.addEventListener("click", () => {
    clear();
    pageFn();
    button.classList.add("active");
  });

  return button;
};

const createButtons = () => {
  const container = document.createElement("div");
  container.classList.add("tab-container");

  const home = createButton("Home", createHome);
  const menu = createButton("Menu", createMenu);
  const contact = createButton("Contact", createContact);
  home.id = "home-tab";
  menu.id = "menu-tab";
  contact.id = "contact-tab";
  container.appendChild(home);
  container.appendChild(menu);
  container.appendChild(contact);

  document.body.insertBefore(container, document.getElementById("content")); // insertar los tabs antes del contenido
};

createButtons();
createHome();
