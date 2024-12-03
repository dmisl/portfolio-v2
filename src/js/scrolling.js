// FIXED SCROLLING

    let currentSection = 0;
    let isThrottled = false;

    function scrollToSection(index) {
    currentSection = Math.max(0, Math.min(index, sections.length - 1));
    const section = sections[currentSection];
    const offset = section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    }

    function onScroll(e) {
    if (isThrottled) return;

    const section = sections[currentSection];
    const atTop = window.scrollY <= section.offsetTop;
    const atBottom = window.scrollY >= section.offsetTop + section.offsetHeight - window.innerHeight;

    if (e.deltaY > 0 && atBottom) {
        scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0 && atTop) {
        scrollToSection(currentSection - 1);
    }

    isThrottled = true;
    setTimeout(() => (isThrottled = false), 800);
    }

    document.addEventListener('wheel', onScroll);