document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link, .nav-link-sidebar, .mobile-nav-link");
    const sections = document.querySelectorAll(".content-section");
    const uptimeElement = document.getElementById("uptime");

    // Navigation logic
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            if (sectionId) {
                showSection(sectionId);
            }
        });
    });

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === `section-${sectionId}`) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });

        // Update active link styles
        updateActiveLinks(sectionId);
    }

    function updateActiveLinks(sectionId) {
        // Top Nav Links
        document.querySelectorAll(".nav-link").forEach(link => {
            if (link.getAttribute("data-section") === sectionId) {
                link.classList.add("text-[#ecffe3]", "border-b-2", "border-[#ecffe3]");
                link.classList.remove("text-[#abc7ff]/60");
            } else {
                link.classList.remove("text-[#ecffe3]", "border-b-2", "border-[#ecffe3]");
                link.classList.add("text-[#abc7ff]/60");
            }
        });

        // Desktop Sidebar Links ONLY
        document.querySelectorAll("aside.w-64 .nav-link-sidebar").forEach(link => {
            if (link.getAttribute("data-section") === sectionId) {
                link.classList.add("bg-[#abc7ff]/10", "text-[#ecffe3]", "font-bold", "border-l-4", "border-[#ecffe3]", "pl-3");
                link.classList.remove("text-[#abc7ff]/50", "pl-4");
            } else {
                link.classList.remove("bg-[#abc7ff]/10", "text-[#ecffe3]", "font-bold", "border-l-4", "border-[#ecffe3]", "pl-3");
                link.classList.add("text-[#abc7ff]/50", "pl-4");
            }
        });

        // Mobile Nav Icons
        document.querySelectorAll("nav.md\\:hidden .mobile-nav-link").forEach(link => {
            if (link.getAttribute("data-section") === sectionId) {
                link.classList.add("text-primary");
                link.classList.remove("text-[#abc7ff]/50");
                if (link.classList.contains("bg-primary")) {
                   link.classList.add("shadow-[0_0_20px_rgba(171,199,255,0.6)]");
                }
            } else {
                link.classList.remove("text-primary", "shadow-[0_0_20px_rgba(171,199,255,0.6)]");
                link.classList.add("text-[#abc7ff]/50");
            }
        });
    }

    // Uptime counter
    let startTime = Date.now();
    setInterval(() => {
        let diff = Date.now() - startTime;
        let seconds = Math.floor((diff / 1000) % 60);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        uptimeElement.textContent = `UPTIME: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);

    // Initial state
    showSection("home");
});
