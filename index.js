function roll(e) {
  const val = Math.floor(Math.random() * 5 + 1)
  const result = document.querySelector(".result")
  const gameName = document.querySelector(".game-name")
  result.style.display = "block"
  gameName.style.display = "block"
  switch(val) {
    case 2: {
      this.setAttribute("style", "transform: rotateY(0deg)");
      gameName.innerText = "Dice...or die!"
      break;
    }
    case 3: {
      this.setAttribute("style", "transform: rotateY(-90deg)");
      gameName.innerText = "Unscrambling the Treasures"
      break;
    }
    case 4: {
      this.setAttribute("style", "transform: rotateY(-180deg)");
      gameName.innerText = "Dragon clutches"
      break;
    }
    case 5: {
      this.setAttribute("style", "transform: rotateY(-270deg)");
      gameName.innerText = "Dragon fireball warrior"
      break;
    }
    default: {
      roll()
    }
  }
  this.classList.add("notransition")
  result.innerText = val
}
document.querySelector(".dice").addEventListener("click", roll)