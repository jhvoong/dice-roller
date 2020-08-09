function roll(e) {
  const val = Math.floor(Math.random() * 5 + 1)
  const node = document.querySelector(".result")
  node.style.display = "block"
  switch(val) {
    case 2: this.setAttribute("style", "transform: rotateY(0deg)"); break;
    case 3: this.setAttribute("style", "transform: rotateY(-90deg)"); break;
    case 4: this.setAttribute("style", "transform: rotateY(-180deg)"); break;
    case 5: this.setAttribute("style", "transform: rotateY(-270deg)"); break;
  }
  this.classList.add("notransition")
  node.innerText = val
}
document.querySelector(".dice").addEventListener("click", roll)