const buttonSelect = document.querySelectorAll("[data-select]");

buttonSelect.forEach(function (item) {
    const selectDropdown = item.querySelector("[data-select-dropdown]");
    const selectTitle = item.querySelector("[data-select-title]");
    item.addEventListener('click', function (event) {
        if ((selectDropdown.style.display === "none")  || (selectDropdown.style.display === "")) {
            selectDropdown.style.display = "block";
        }
        event.target.addEventListener('click', function (event) {
            if (event.target.hasAttribute("data-select-item")) {
                selectTitle.innerHTML = event.target.innerText;
                selectDropdown.style.display = "none";
            //
            }
        }, {once: true});
        event.target.addEventListener("mouseleave", function (event) {
            selectDropdown.style.display = "none";
        },{once: true});
   }, );
});


