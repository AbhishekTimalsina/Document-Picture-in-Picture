let pipBtn = document.querySelector(".pip-button");
let timer = document.querySelector(".stopwatch-container");
let container = document.querySelector(".container");
let pipText = document.querySelector(".pip-text");

pipBtn.addEventListener("click", async function () {
  if (!("documentPictureInPicture" in window)) {
    console.log("PIP mode not supported");
    return;
  }
  if (documentPictureInPicture.window) {
    documentPictureInPicture.window.close();
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
  pipWindow.document.body.append(timer);

  pipWindow.addEventListener("pagehide", function () {
    pipText.classList.remove("active");

    container.append(timer);
  });
});
