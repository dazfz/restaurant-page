(() => {
  "use strict";
  const e = () => {
      const e = document.getElementById("content"),
        t = document.createElement("h2");
      t.textContent = "Welcome to Our Pizza Restaurant!";
      const n = document.createElement("p");
      n.textContent =
        "At our pizza restaurant, we strive to provide the most delicious and authentic pizzas made with the freshest ingredients. Whether you prefer classic Margherita, savory Pepperoni, or tropical Hawaiian, we have a wide range of flavors to satisfy your cravings. Come and enjoy our mouthwatering pizzas that are crafted with passion and served with a smile.";
      const a = document.createElement("img");
      (a.src = "pizza.jpg"),
        e.appendChild(t),
        e.appendChild(n),
        e.appendChild(a);
    },
    t = () => {
      const e = document.getElementById("content"),
        t = document.createElement("h2");
      t.textContent = "Our Pizza Menu";
      const n = document.createElement("ul"),
        a = document.createElement("li"),
        i = document.createElement("img");
      (i.src = "margherita.jpg"),
        a.appendChild(i),
        (a.innerHTML += "Margherita Pizza - $10");
      const d = document.createElement("li"),
        c = document.createElement("img");
      (c.src = "pepperoni.jpg"),
        d.appendChild(c),
        (d.innerHTML += "Pepperoni Pizza - $12");
      const o = document.createElement("li"),
        r = document.createElement("img");
      (r.src = "hawaiian.jpg"),
        o.appendChild(r),
        (o.innerHTML += "Hawaiian Pizza - $15");
      const m = document.createElement("li"),
        p = document.createElement("img");
      (p.src = "margherita_extra.jpg"),
        m.appendChild(p),
        (m.innerHTML += "Margherita Extra Pizza - $12");
      const l = document.createElement("li"),
        s = document.createElement("img");
      (s.src = "supreme.jpg"),
        l.appendChild(s),
        (l.innerHTML += "Supreme Pizza - $14"),
        n.appendChild(a),
        n.appendChild(d),
        n.appendChild(o),
        n.appendChild(m),
        n.appendChild(l),
        e.appendChild(t),
        e.appendChild(n);
    },
    n = () => {
      const e = document.getElementById("content"),
        t = document.createElement("h2");
      t.textContent = "Contact Us";
      const n = document.createElement("p");
      n.textContent = "123 Main Street, City, Country";
      const a = document.createElement("p");
      a.textContent = "Phone: 123-456-7890";
      const i = document.createElement("p");
      (i.textContent = "Email: info@example.com"),
        e.appendChild(t),
        e.appendChild(n),
        e.appendChild(a),
        e.appendChild(i);
    },
    a = (e, t) => {
      const n = document.createElement("button");
      return (
        (n.textContent = e),
        n.classList.add("tab"),
        n.addEventListener("click", () => {
          (() => {
            const e = document.getElementById("content");
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          })(),
            t(),
            n.classList.add("active");
        }),
        n
      );
    };
  (() => {
    const i = document.createElement("div");
    i.classList.add("tab-container");
    const d = a("Home", e),
      c = a("Menu", t),
      o = a("Contact", n);
    (d.id = "home-tab"),
      (c.id = "menu-tab"),
      (o.id = "contact-tab"),
      i.appendChild(d),
      i.appendChild(c),
      i.appendChild(o),
      document.body.insertBefore(i, document.getElementById("content"));
  })(),
    e();
})();
