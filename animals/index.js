let currentInfobox;
document.querySelectorAll(".has-extra").forEach(element => {
    element.addEventListener("mouseover", event => {
        event.target.style.textDecoration = "none";
        const {top, left} = getComputedStyle(event.target);
        const infobox = event.target.nextElementSibling;
        infobox.setAttribute("class", "extra-visible");
        infobox.style.top = `${top - (0.25 * infobox.clientHeight)}px`;
        infobox.style.left = `${left - (0.25 * infobox.clientWidth)}px`;
        currentInfobox = infobox;
    }, false);
    element.addEventListener("mouseout", event => {
        currentInfobox.setAttribute("class", "extra-hidden");
        event.target.style.textDecoration = "dotted underline 2px";
        currentInfobox = null;
    }, false);
});