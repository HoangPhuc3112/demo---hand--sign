import {
  gotResults,
  start,
  pause,
  clearConsole,
  landMarks,
} from "./linePose.js";
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const canvasimg = document.getElementById("canvasimg");
const context = canvas.getContext("2d");
const contextimg = canvasimg.getContext("2d");
// export const webcam = new Webcam(video, "user", canvas);

const buttonStart = document.getElementById("start");
const buttonPause = document.getElementById("pause");
const buttonStop = document.getElementById("clearConsole");

export const nameClass = document.getElementById("class");
export const accuracyClass = document.getElementById("accuracy");

const modelParams = {
  flipHorizontal: false, // flip e.g for video
  maxNumBoxes: 2, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
  // modelType: "ssd640fpnlite",
};
const modelHandTrack = await handTrack.load(modelParams);

navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

export const handsfree = new Handsfree({
  hands: {
    enabled: true,
    weboji: true,
    pose: true,
    hands: true,
  },
});

handsfree.update({ hands: true });
handsfree.enablePlugins("browser");
handsfree.throttle(handsfree.model.hands.getData, 10);

buttonStart.onclick = start;
buttonPause.onclick = pause;
buttonStop.onclick = clearConsole;

export const videoHandfree = document.getElementById("handsfree-video-1");
videoHandfree.style.visibility = "hidden";

export function handTrackVideo() {
  handTrack.startVideo(video).then(function (status) {
    console.log("video started", status);
    if (status) {
      console.log("Video started. Now tracking");
      setInterval(runDetection, 100);
    } else {
      console.log("Please enable video");
    }
  });
}
function runDetection() {
  modelHandTrack.detect(video).then((predictions) => {
    console.log("Predictions: ", predictions);
    modelHandTrack.renderPredictions(predictions, canvas, context, video);
    cropPicture(predictions);
  });
}
// Load the model.
handTrack.load(modelParams).then((lmodel) => {
  modelHandTrack = lmodel;
});
let x1, y1, x2, y2;
export function cropPicture(predictions) {
  if (predictions[1] && predictions[0] != null) {
    if (predictions[1].label == "face") {
      x1 = predictions[0].bbox[0];
      y1 = predictions[0].bbox[1];
      x2 = predictions[0].bbox[2];
      y2 = predictions[0].bbox[3];
    } else if (predictions[0].label == "face") {
      x1 = predictions[1].bbox[0];
      y1 = predictions[1].bbox[1];
      x2 = predictions[1].bbox[2];
      y2 = predictions[1].bbox[3];
    }
  } else if (predictions[0] != null && predictions[0].label != "face") {
    x1 = predictions[0].bbox[0];
    y1 = predictions[0].bbox[1];
    x2 = predictions[0].bbox[2];
    y2 = predictions[0].bbox[3];
  }
  // var width = x3 + 100;
  // var height = x4 + 100;
  var width = 438;
  var height = 328;
  if (width && height) {
    canvasimg.width = width;
    canvasimg.height = height;
    contextimg.drawImage(
      video, // Video
      // Vị trí và kích thước khung ảnh cắt
      x1 + 250, //
      y1 + 30,
      width + 100,
      height + 170,
      // Vị trí và kích thước khung ảnh sau khi cắt
      0,
      0,
      width,
      height
    );
  } else {
    clearphoto();
  }
}

function clearphoto() {
  contextimg.fillStyle = "#AAA";
  contextimg.fillRect(0, 0, canvasimg.width, canvasimg.height);
}
