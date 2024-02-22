"use strict";

document.querySelectorAll("h1, h2, h3").forEach(heading => {
    const url = `#${heading.id ||= heading.textContent.replace(/ /g, "-")}`;
    heading.addEventListener("click", () => window.location.href = url);
});

{
    let prefLang = localStorage.getItem("pref-lang") ?? "English";

    /**
     * @type {HTMLButtonElement}
     */
    const langToggle = document.querySelector("button#lang-pref");

    {
        const target = document.querySelector("body main");
        /**
         * @type {(...nodes: (string | Node)[]) => void}
         */
        const replace = content => target.innerHTML = content;

        const langs = ["English", "French"];
        let current = langs[0];
        let index = 0;

        const loadCurrent = async () => replace(await (await fetch(`locales/${current}.html`)).text())
        const cycle = () => {
            langToggle.textContent = current;
            current = langs[index = (index + 1) % langs.length];
            loadCurrent();
            localStorage.setItem("pref-lang", current);
        };

        if ((index = langs.indexOf(prefLang)) === -1)  prefLang = langs[index = 0];

        langToggle.addEventListener("click", cycle);

        current = prefLang;
        localStorage.setItem("pref-lang", current);
        loadCurrent();
        langToggle.textContent = langs[(index + 1) % langs.length];
    }
}