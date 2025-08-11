const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  //header container
  ScrollReveal().reveal(".header_container h1", scrollRevealOption)
  
  ScrollReveal().reveal(".header_container h3",{
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header_container .btn",{
    ...scrollRevealOption,
    delay: 1000,
  });
  
  //About us section
  ScrollReveal().reveal(".about_container .section_header", scrollRevealOption)
  
  ScrollReveal().reveal(".about_container .section_subheader",{
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about_container .about_flex",{
    ...scrollRevealOption,
    delay: 1000,
  });
  
  //Destination Container
  ScrollReveal().reveal(".destination_card", {...scrollRevealOption, interval: 500,});
  ScrollReveal().reveal(".destination_content", {...scrollRevealOption, interval: 500, delay});