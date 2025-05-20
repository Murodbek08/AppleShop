const radios = document.querySelectorAll(".custom-radio");

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    radios.forEach((r) => r.classList.remove("active")); 
    radio.classList.add("active"); 
    console.log("Tanlangan qiymat:", radio.dataset.value);
  });
});
