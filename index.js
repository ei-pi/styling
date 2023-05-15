"use strict";

document.querySelectorAll("h2, h3, h4").forEach(heading => {
    const url = `#${heading.id = heading.textContent.replace(/ /g, "-")}`;
    heading.addEventListener("click", () => window.location.href = url);
});