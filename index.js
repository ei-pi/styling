"use strict";

document.querySelectorAll("h1, h2, h3").forEach(heading => {
    const url = `#${heading.id ||= heading.textContent.replace(/ /g, "-")}`;
    heading.addEventListener("click", () => window.location.href = url);
});