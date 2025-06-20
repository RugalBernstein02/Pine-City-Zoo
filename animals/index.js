document.querySelectorAll(".has-extra").forEach(element => {
    element.addEventListener("mouseover", event => {
        event.target.style.textDecoration = "none";
        const {top, left} = getComputedStyle(event.target);
        const infobox = event.target.nextElementSibling;
        infobox.setAttribute("class", "extra-visible");
        infobox.style.top = `${top - (0.25 * infobox.clientHeight)}px`;
        infobox.style.left = `${left - (0.25 * infobox.clientWidth)}px`;
    }, false);
    element.addEventListener("mouseout", event => {
        const currentInfobox = document.querySelector(".extra-visible");
        currentInfobox.setAttribute("class", "extra-hidden");
        event.target.style.textDecoration = "dotted underline 2px";
    }, false);
    /* add support for touch devices.
    concurrency is not an issue, since mouse and touch events
    will not trigger on the same device,
    therefore, only one block of code will use `currentInfobox`. */
    element.addEventListener("touchend", event => {
        const currentInfobox = document.querySelector(".extra-visible");
        // an infobox is currently showing; hide it
        if (currentInfobox) {
            currentInfobox.setAttribute("class", "extra-hidden");
            event.target.style.textDecoration = "dotted underline 2px";
        }
        // no infobox is showing; show the target's associated infobox
        else {
            event.target.style.textDecoration = "blue solid underline 2px";
            const {top, left} = getComputedStyle(event.target);
            const infobox = event.target.nextElementSibling;
            infobox.setAttribute("class", "extra-visible");
            infobox.style.top = `${top - (0.25 * infobox.clientHeight)}px`;
            infobox.style.left = `${left - (0.25 * infobox.clientWidth)}px`;
        }
    });
});