export const createContact = () => {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  const address = document.createElement("p");
  address.textContent = "123 Main Street, City, Country";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 123-456-7890";

  const email = document.createElement("p");
  email.textContent = "Email: info@example.com";

  content.appendChild(heading);
  content.appendChild(address);
  content.appendChild(phone);
  content.appendChild(email);
};
