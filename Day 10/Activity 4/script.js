document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the form data
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    // Log the form data to the console
    console.log(formObject);
  });
});

function handleCountryChange() {
  let sel = document.getElementById("countries");
  let selectedCountry = document.getElementById("selectedCountry");
  selectedCountry.textContent = sel.value;
}
