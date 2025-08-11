const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", scrollRevealOption)

ScrollReveal().reveal(".header_container h3",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".Norway", {...scrollRevealOption, interval: 500,});

ScrollReveal().reveal(".Denmark", {...scrollRevealOption, interval: 500,});

ScrollReveal().reveal(".Sweden", {...scrollRevealOption, interval: 500,});
