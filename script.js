function show(type, price) {
  document.getElementById("price-pop").style.display = "block";
  document.getElementById("type").innerText = type;
  document.getElementById("price").innerText = price;
}

function hide() {
  document.getElementById("price-pop").style.display = "none";
}
