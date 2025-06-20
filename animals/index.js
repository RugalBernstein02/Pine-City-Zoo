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
    /* add support for touch devices.
    concurrency is not an issue, since mouse and touch events
    will not trigger on the same device,
    therefore, only one block of code will use `currentInfobox`. */
    element.addEventListener("touchend", event => {
        // an infobox is currently showing; hide it
        if (currentInfobox) {
            currentInfobox.setAttribute("class", "extra-hidden");
            event.target.style.textDecoration = "dotted underline 2px";
            currentInfobox = null;
        }
        // no infobox is showing; show the target's associated infobox
        else {
            event.target.style.textDecoration = "blue solid underline 2px";
            const {top, left} = getComputedStyle(event.target);
            const infobox = event.target.nextElementSibling;
            infobox.setAttribute("class", "extra-visible");
            infobox.style.top = `${top - (0.25 * infobox.clientHeight)}px`;
            infobox.style.left = `${left - (0.25 * infobox.clientWidth)}px`;
            currentInfobox = infobox;
        }
    });
});