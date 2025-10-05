const stands = [
  "Star Platinum",
  "The World",
  "Crazy Diamond",
  "Killer Queen",
  "Gold Experience",
  "Sticky Fingers",
  "Stone Free",
  "Tusk Act 4",
  "Made in Heaven",
  "King Crimson",
  "Weather Report",
  "The Hand",
  "Harvest",
  "Hierophant green",
  "Green tea",
  "Hermit purple",

];

document.getElementById("findStandBtn").addEventListener("click", function() {
  const randomStand = stands[Math.floor(Math.random() * stands.length)];
  document.getElementById("standResult").textContent = `Your Stand is: ${randomStand}!`;
});
