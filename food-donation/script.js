function addFood() {
  let food = document.getElementById("food").value.trim();
  let location = document.getElementById("location").value.trim();
  let mfg = document.getElementById("mfg").value;
  let exp = document.getElementById("exp").value;

  if (!food || !location || !mfg || !exp) {
    alert("Please fill all fields!");
    return;
  }

  let foods = JSON.parse(localStorage.getItem("foods")) || [];
  foods.push({ food, location, mfg, exp });
  localStorage.setItem("foods", JSON.stringify(foods));

  alert("Food Added Successfully!");

  // Clear fields
  document.getElementById("food").value = "";
  document.getElementById("location").value = "";
  document.getElementById("mfg").value = "";
  document.getElementById("exp").value = "";
}
