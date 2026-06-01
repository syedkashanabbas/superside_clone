/**
 * Square One Design Core - Matrix Interaction Engine
 * Features: Sticky Scroll Tracking, Stagger Reveals, Mouse Parallax
 */

document.addEventListener("DOMContentLoaded", function () {
    // Check if GSAP and ScrollTrigger are loaded correctly
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        // -------------------------------------------------------------
        // 1. REVEAL SCROLL TIMELINE (Sequential Entry Stagger)
        // -------------------------------------------------------------
        const matrixRevealTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#capabilities-matrix-section",
                start: "top 75%", // Triggers when the section top reaches 75% viewport height
                toggleActions: "play none none none"
            }
        });

        // Left Content subtle drop-in fade
        matrixRevealTL.from(".animate-fade-element", {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out"
        });

        // Cards sequential elastic wave pop-up
        matrixRevealTL.from(".matrix-card", {
            opacity: 0,
            y: 40,
            scale: 0.96,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.3");


        // -------------------------------------------------------------
        // 2. MAGNETIC MOUSE PARALLAX INTERACTION (Only for Desktop/Mouse)
        // -------------------------------------------------------------
        const cards = document.querySelectorAll(".matrix-card");

        cards.forEach((card) => {
            const img = card.querySelector(".matrix-parallax-img");
            const textBlock = card.querySelector(".card-text-content");

            // On Mouse Move inside the specific card container
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                
                // Get mouse position relative to the card boundaries (Value from -0.5 to 0.5)
                const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
                const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

                // Subtle magnetic shift on the image layer
                gsap.to(img, {
                    x: mouseX * 25, // Moves max 12.5px left/right
                    y: mouseY * 25, // Moves max 12.5px up/down
                    scale: 1.08,     // Elegant hover zoom scale
                    duration: 0.4,
                    ease: "power2.out"
                });

                // Subtle text push reaction away from mouse for dynamic depth look
                if (textBlock) {
                    gsap.to(textBlock, {
                        y: -5,
                        duration: 0.3,
                        ease: "power1.out"
                    });
                }
            });

            // Reset transitions to standard initial positioning on mouse leave
            card.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    duration: 0.6,
                    ease: "power3.out"
                });

                if (textBlock) {
                    gsap.to(textBlock, {
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            });
        });
    } else {
        console.warn("GSAP Core Engine or ScrollTrigger Plugin was not detected.");
    }
});