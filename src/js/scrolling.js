// FIXED SCROLLING

    let currentSection = 0;
    let isThrottled = false;

    // Function to scroll to the calculated center of a section
    function scrollToSection(index) {
    currentSection = Math.max(0, Math.min(index, sections.length - 1));
    const section = sections[currentSection];
    const offset = section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    }

    // Throttled scroll event listener
    function onScroll(e) {
    if (isThrottled) return;

    // Prevent inner scrolling from triggering navigation
    const section = sections[currentSection];
    const atTop = window.scrollY <= section.offsetTop;
    const atBottom = window.scrollY >= section.offsetTop + section.offsetHeight - window.innerHeight;

    if (e.deltaY > 0 && atBottom) {
        // Scroll down to the next section
        scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0 && atTop) {
        // Scroll up to the previous section
        scrollToSection(currentSection - 1);
    }

    // Throttle further scrolling until the animation completes
    isThrottled = true;
    setTimeout(() => (isThrottled = false), 800);
    }

    // Attach scroll event listener
    document.addEventListener('wheel', onScroll);