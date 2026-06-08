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

document
.getElementById("start-trial-btn")
.addEventListener("click", () => {

    track("hero_cta_click");

});

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