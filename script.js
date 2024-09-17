 document.addEventListener("DOMContentLoaded", () => {
  const enButton = document.getElementById("en-btn");
  const frButton = document.getElementById("fr-btn");
  
  const switchLanguage = (lang) => {
    document.querySelectorAll("[data-en]").forEach((element) => {
      element.textContent = element.getAttribute(`data-${lang}`);
    });
  };

  // Default language
  switchLanguage("en");

  // Switch to English
  enButton.addEventListener("click", () => {
    switchLanguage("en");
  });

  // Switch to French
  frButton.addEventListener("click", () => {
    switchLanguage("fr");
  });
});
