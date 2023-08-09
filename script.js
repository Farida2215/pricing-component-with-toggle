const changePrice = document.querySelectorAll(".h1");
const slider = document.querySelector(".slider");
const btn = document.querySelector(".btn");
console.log(slider.checked);
slider.addEventListener("change", function () {
    const multiplier = slider.checked ? 10 : 0.1;
    for (let i = 0; i < changePrice.length; i++) {
      const textContent = changePrice[i].textContent;
      const numericValue = parseFloat(textContent.replace("$", ""));
      const updatedValue = numericValue * multiplier;
      changePrice[i].textContent = `$${updatedValue.toFixed(2)}`;
    }
});

if (btn.style.backgroundColor=="#ffff"){
    btn.style.backgroundColor="red";
}
