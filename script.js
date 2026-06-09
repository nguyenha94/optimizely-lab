let cartCount = 0;

function track(eventName) {

    if (window.optimizely) {

        window.optimizely.push({
            type: "event",
            eventName: eventName
        });

    }

    console.log(eventName);
}

window.optimizely = window.optimizely || [];

window.optimizely.push({
  type: "user",
  attributes: {
    customerType: "vip",
    region: "APAC",
    loggedIn: true
  }
});

console.log("Custom attributes sent");

document
.getElementById("start-trial-btn")
.addEventListener("click", () => {

    track("hero_cta_click");

});

setTimeout(() => {

    const banner = document.createElement("div");

    banner.id = "lazy-banner";

    banner.style.padding = "20px";
    banner.style.margin = "20px";
    banner.style.background = "#ffeeba";

    banner.innerHTML =
        "This banner loaded after 5 seconds";

    document.body.appendChild(banner);

}, 5000);

document
.getElementById("book-demo-btn")
.addEventListener("click", () => {

    track("book_demo_click");

});

document
.getElementById("subscribe-btn")
.addEventListener("click", () => {

    track("newsletter_signup");

});

document
.getElementById("checkout-btn")
.addEventListener("click", () => {

    track("checkout_click");

});

document
.querySelectorAll(".add-cart")
.forEach(btn => {

    btn.addEventListener("click", () => {

        cartCount++;

        document
            .getElementById("cart-count")
            .innerText =
            `Cart: ${cartCount} items`;

        track("add_to_cart");

    });

});

document
.getElementById("dark-mode-btn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    track("theme_changed");

});

document
.getElementById("search-box")
.addEventListener("change", () => {

    track("search_performed");

});