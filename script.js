function computerPlay() {
  const arr = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
