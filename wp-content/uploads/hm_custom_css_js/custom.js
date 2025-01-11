document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with "elementor" in the class name
    const elements = document.querySelectorAll('[class*="elementor"]');

    elements.forEach((el) => {
        // Get all classes on the element
        let newClasses = Array.from(el.classList).map(cls => 
            cls.includes("elementor") ? 'custom-' + Math.random().toString(36).substr(2, 5) : cls
        );

        // Replace element's classes with new ones, excluding "elementor"
        el.className = newClasses.join(" ");
    });
});
