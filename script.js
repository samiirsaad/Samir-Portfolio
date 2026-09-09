/* =========================================
   SAMIR MOHAMED SAAD
   PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("open");

            if (navLinks.classList.contains("open")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }

        });


        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuButton.textContent = "☰";

            });

        });

    }


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const sections = document.querySelectorAll("section[id]");

    const updateActiveNav = () => {

        let currentSection = "home";

        const scrollPosition = window.scrollY + 180;

        sections.forEach((section) => {

            const sectionTop = section.offsetTop;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection = section.id;
            }

        });


        navItems.forEach((link) => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .certificate-card, .education-card, .about-main, .about-card, .security-topic"
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================
       TERMINAL TYPING EFFECT
    ===================================== */

    const cursor = document.querySelector(".cursor");

    if (cursor) {

        setInterval(() => {

            cursor.style.opacity =
                cursor.style.opacity === "0"
                    ? "1"
                    : "0";

        }, 550);

    }


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {

        const currentYear =
            new Date().getFullYear();

        copyright.textContent =
            `© ${currentYear} Samir Mohamed Saad. All rights reserved.`;

    }


    /* =====================================
       CONSOLE
    ===================================== */

    console.log(
        "%c Samir Portfolio ",
        "color:#00f5a0;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%c Cybersecurity • Network Security • AI ",
        "color:#8f9ba8;font-size:12px;"
    );

});
