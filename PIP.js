let pipBtn = document.querySelector(".pip-button");
let pipContainer = document.querySelector(".pip-container");
let container = document.querySelector(".container");
let pipText = document.querySelector(".pip-text");

pipBtn.addEventListener("click", async function () {
  if (!("documentPictureInPicture" in window)) {
    console.log("PIP mode not supported");
    return;
  }
  let options = {
    width: 300,
    height: 300,
  };
  let pipWindow = await documentPictureInPicture.requestWindow(options);
  pipText.classList.add("active");
  let style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = document.styleSheets[0].href;
  pipWindow.document.head.append(style);
  pipWindow.document.body.append(pipContainer);

  pipWindow.addEventListener("pagehide", function () {
    pipText.classList.remove("active");

    container.append(pipContainer);
  });
});
