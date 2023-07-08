function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// Example usage:
function handleResize() {
    console.log("Resizing...");
    // Perform expensive operation here
}

const debouncedResize = debounce(handleResize, 300);

// Attach the debounced function to the resize event
// window.addEventListener("resize", debouncedResize);