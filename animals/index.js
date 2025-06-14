let currentInfobox;
document.querySelectorAll(".has-extra").forEach(element => {
    element.addEventListener("mouseover", event => {
        event.target.style.textDecoration = "none";
        const parentStyle = window.getComputedStyle(event.target);
        const infobox = event.target.children.item(0);
        currentInfobox = infobox;
        infobox.setAttribute("class", "extra-visible");
        infobox.style.top = `${parentStyle.top - (0.25 * infobox.clientHeight)}px`;
        infobox.style.left = `${parentStyle.left - (0.25 * infobox.clientWidth)}px`;
    }, false);
    element.addEventListener("mouseout", event => {
        currentInfobox.setAttribute("class", "extra-hidden");
        event.target.style.textDecoration = "dotted underline 2px";
        currentInfobox = null;
    }, false);
});