import { pause, playerRender } from "./script.js";
import { renderWallpapers } from "./my-computer.js";
import { renderConfig } from "./config.js";
import { renderInfo } from "./info.js";
import { playClickSound } from "./script.js";

const playerSection = document.getElementById("playerSection");
const playerButton = document.getElementById("musicPlayer");
const closePlayerBtn = document.getElementById("closePlayer");

const computerSection = document.getElementById("computerSection");
const myComputerButton = document.getElementById("myComputer");
const closeComputerBtn = document.getElementById("closeComputer");

const configSection = document.getElementById("configSection");
const configButton = document.getElementById("config");
const closeConfigBtn = document.getElementById("closeConfig");

const infoSection = document.getElementById("infoSection");
const infoButton = document.getElementById("info");
const closeInfoBtn = document.getElementById("closeInfo");

playerButton.addEventListener("click", () => handleButtonClick(playerRender));
myComputerButton.addEventListener("click", () => handleButtonClick(renderWallpapers));
configButton.addEventListener("click", () => handleButtonClick(renderConfig));
infoButton.addEventListener("click", () => handleButtonClick(renderInfo));

closePlayerBtn.addEventListener("click", () => {
  handleCloseButtons(playerSection), pause();
});
closeComputerBtn.addEventListener("click", () => handleCloseButtons(computerSection));
closeConfigBtn.addEventListener("click", () => handleCloseButtons(configSection));
closeInfoBtn.addEventListener("click", () => handleCloseButtons(infoSection));

function handleButtonClick(renderFunction) {
  playClickSound();
  renderFunction();
}

function handleCloseButtons(section) {
  section.style.display = "none";
}
