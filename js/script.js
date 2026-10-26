
document.addEventListener("DOMContentLoaded", function () {

    // 1. Select HTML elements
    const header = document.querySelector("header");
    const searchInput = document.querySelector("main input");
    const menuTable = document.querySelector("table");
    const menuRows = document.querySelectorAll("table tr");

    // 2. Smooth scrolling for navigation
    const navLinks = document.querySelectorAll("header ul li a");

    const sections = {
        "Home": "home",
        "Menu": "menu",
        "About Us": "welcome",
        "Gallery": "menu",
        "Contact": "contact"
    };

    // Add IDs to HTML elements
    const hero = document.querySelector("main");
    hero.id = "home";

    const headings = document.querySelectorAll("body > h2");

    if (headings.length >= 2) {
        headings[0].id = "welcome";
        headings[1].id = "menu";
    }

    const footer = document.querySelector("center");

    if (footer) {
        footer.id = "contact";
    }

    navLinks.forEach(function (link) {

        const text = link.textContent.trim();
        const sectionId = sections[text];

        link.href = "#" + sectionId;

        link.addEventListener("click", function (event) {

            const target = document.getElementById(sectionId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    // 3. Search food items
    if (searchInput && menuTable) {

        const message = document.createElement("p");

        message.textContent = "No food items found!";
        message.style.color = "red";
        message.style.textAlign = "center";
        message.style.display = "none";

        menuTable.insertAdjacentElement("afterend", message);

        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase().trim();

            let count = 0;

            menuRows.forEach(function (row, index) {

                // Do not search the heading row
                if (index === 0) {
                    return;
                }

                const foodName = row.textContent.toLowerCase();

                if (foodName.includes(searchText)) {
                    row.style.display = "";
                    count++;
                } else {
                    row.style.display = "none";
                }

            });

            if (count === 0) {
                message.style.display = "block";
            } else {
                message.style.display = "none";
            }

        });

    }

    // 4. Scroll animation
    const animatedElements = document.querySelectorAll(
        "body > h2, body > p, table"
    );

    animatedElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.8s ease";

    });

    function revealElements() {

        animatedElements.forEach(function (element) {

            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 50) {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }

        });

    }

    window.addEventListener("scroll", revealElements);

    revealElements();

    // 5. Navbar scroll effect
    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.padding = "12px 8%";
            header.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.3)";

        } else {

            header.style.padding = "";
            header.style.boxShadow = "";

        }

    });

    // 6. Menu hover effect
    const foodItems = document.querySelectorAll(
        "table tr:not(:first-child)"
    );

    foodItems.forEach(function (row) {

        row.style.cursor = "pointer";

        row.addEventListener("mouseenter", function () {
            row.style.backgroundColor = "#ffe1dc";
        });

        row.addEventListener("mouseleave", function () {
            row.style.backgroundColor = "";
        });

    });

    // 7. Welcome message
    console.log("Welcome to Food Corner Restaurant!");

});