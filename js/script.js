// Fit Content
function fitTextToWidth(element, maxFontSize = 100, minFontSize = 8) {
    const parent = element.parentElement;
    if (!parent) return;

    const parentWidth = parent.clientWidth;

    let low = minFontSize;
    let high = maxFontSize;
    let best = minFontSize;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        element.style.fontSize = mid + "px";

        if (element.scrollWidth <= parentWidth) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    element.style.fontSize = best + "px";
}

function fitAllMonthTexts() {
    const titleElements = document.querySelectorAll(".eventTitle");
    const monthElements = document.querySelectorAll(".campCard-Month");
    const dateElements = document.querySelectorAll(".campCard-Date");
    
    titleElements.forEach(el => fitTextToWidth(el, 35, 8));
    monthElements.forEach(el => fitTextToWidth(el, 60, 8));
    dateElements.forEach(el => fitTextToWidth(el, 90, 10));
}

window.addEventListener("load", fitAllMonthTexts);
window.addEventListener("resize", fitAllMonthTexts);
