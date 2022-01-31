import { nameClass, accuracyClass, handTrackVideo } from "./Test1.js";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const confidence = 7.5;

const handsfree = new Handsfree({ hands: true });
// handsfree.enablePlugins("browser");
handsfree.start();
export function start() {
  handTrackVideo();
  handsfree.start();
  // webcam.start();
  console.log("Start Detection");
  gotResults();
}

export function pause() {
  console.log("Pause");
  nameClass.innerText = "Pause";
  accuracyClass.innerText = "Error";
  handsfree.pause();
  handTrack.stopVideo(video);
}

export function clearConsole() {
  console.clear();
}
let lasthandsClass;
let loading = "Loading ... ";
let lastLoading = "";
export let landMarks;
export function gotResults() {
  handsfree.use("logger", ({ hands }) => {
    landMarks = handsfree.data.hands.multiHandLandmarks;
    let handsClass = hands.gesture[0]?.name;
    let handsScores = hands.gesture[0]?.confidence;
    console.log(hands);
    if (handsClass != null) {
      if (handsScores >= confidence && lasthandsClass != handsClass) {
        lastLoading = "";
        lasthandsClass = handsClass;
        nameClass.innerText = handsClass;
        accuracyClass.innerText = handsScores;
        responsiveVoice.speak(handsClass);
      }
    } else {
      if (lastLoading != loading) {
        lastLoading = loading;
        console.log("Loading ...");
        nameClass.innerText = loading;
        accuracyClass.innerText = "Error";
      }
    }
  });
}
// ----------------------------- A  -----------------------------
handsfree.useGesture({
  name: "A",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addDirection", "Middle", "VerticalUp", 0.1111111111111111],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addDirection", "Middle", "VerticalUp", 0.5789473684210527],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
    ["addDirection", "Pinky", "DiagonalUpRight", 0.6666666666666666],
  ],
});
// ----------------------------- B  -----------------------------
handsfree.useGesture({
  name: "B",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addDirection", "Thumb", "VerticalUp", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "VerticalUp", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "VerticalUp", 1],
    ["addCurl", "Ring", "NoCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addDirection", "Thumb", "VerticalUp", 1],
    ["addDirection", "Thumb", "DiagonalUpRight", 0.36363636363636365],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "VerticalUp", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "VerticalUp", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 0.034482758620689655],
    ["addCurl", "Ring", "NoCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
});
// ----------------------------- C  -----------------------------
handsfree.useGesture({
  name: "C",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "HorizontalLeft", 1],
    ["addCurl", "Index", "HalfCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "HalfCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "HalfCurl", 1],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addCurl", "Pinky", "HalfCurl", 0.15384615384615385],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
  ],
});
// ----------------------------- D  -----------------------------
handsfree.useGesture({
  name: "D",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "HalfCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 0.875],
  ],
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "HalfCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
    ["addDirection", "Pinky", "VerticalUp", 0.1111111111111111],
  ],
  enabled: true,
});
// ----------------------------- E  -----------------------------
handsfree.useGesture({
  name: "E",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addDirection", "Thumb", "VerticalUp", 1],
    ["addDirection", "Thumb", "DiagonalUpRight", 0.034482758620689655],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "VerticalUp", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addDirection", "Thumb", "VerticalUp", 1],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 0.42857142857142855],
    ["addDirection", "Middle", "VerticalUp", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
});
// ----------------------------- F  -----------------------------
handsfree.useGesture({
  name: "F",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addCurl", "Thumb", "HalfCurl", 0.15384615384615385],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "HalfCurl", 1],
    ["addCurl", "Index", "FullCurl", 0.15384615384615385],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "NoCurl", 1],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
  ],
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "VerticalUp", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 0.034482758620689655],
    ["addCurl", "Index", "NoCurl", 0.17391304347826086],
    ["addCurl", "Index", "HalfCurl", 1],
    ["addCurl", "Index", "FullCurl", 0.13043478260869565],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addDirection", "Index", "VerticalUp", 0.15384615384615385],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "VerticalUp", 1],
    ["addCurl", "Ring", "NoCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
  enabled: true,
});
// ----------------------------- G  -----------------------------
handsfree.useGesture({
  name: "G",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "HorizontalLeft", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "HorizontalLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
  ],
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "HorizontalLeft", 1],
    ["addCurl", "Index", "HalfCurl", 1],
    ["addDirection", "Index", "HorizontalLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
  ],
});
// ----------------------------- H  -----------------------------
handsfree.useGesture({
  name: "H",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "HorizontalLeft", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "HorizontalLeft", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "HorizontalLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "HorizontalLeft", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "HorizontalLeft", 1],
  ],
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addCurl", "Thumb", "NoCurl", 0.07142857142857142],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addCurl", "Index", "HalfCurl", 0.1111111111111111],
    ["addDirection", "Index", "HorizontalLeft", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "HorizontalLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "HorizontalLeft", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "HorizontalLeft", 1],
  ],
});
// ----------------------------- I  -----------------------------
handsfree.useGesture({
  name: "I",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 0.1111111111111111],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
  ],
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addCurl", "Thumb", "NoCurl", 0.36363636363636365],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addDirection", "Thumb", "VerticalUp", 0.034482758620689655],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addDirection", "Index", "VerticalUp", 0.2],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addDirection", "Middle", "VerticalUp", 0.1111111111111111],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "VerticalUp", 1],
    ["addDirection", "Pinky", "DiagonalUpRight", 0.15384615384615385],
  ],
  enabled: true,
});
// ----------------------------- J  -----------------------------
handsfree.useGesture({
  name: "J",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "HalfCurl", 1],
    ["addCurl", "Thumb", "NoCurl", 0.15384615384615385],
    ["addDirection", "Thumb", "HorizontalLeft", 0.42857142857142855],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addDirection", "Middle", "HorizontalLeft", 0.42857142857142855],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "HorizontalLeft", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "HorizontalLeft", 1],
  ],
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addCurl", "Thumb", "HalfCurl", 0.034482758620689655],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addDirection", "Thumb", "HorizontalLeft", 0.034482758620689655],
    ["addCurl", "Index", "FullCurl", 1],
    ["addDirection", "Index", "VerticalUp", 0.5],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "FullCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addDirection", "Middle", "HorizontalLeft", 0.034482758620689655],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addDirection", "Ring", "HorizontalLeft", 1],
    ["addCurl", "Pinky", "NoCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 0.25],
    ["addDirection", "Pinky", "HorizontalLeft", 1],
  ],
  enabled: true,
});
// ----------------------------- K  -----------------------------
handsfree.useGesture({
  name: "K",
  algorithm: "fingerpose",
  models: "hands",
  confidence: confidence,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "VerticalUp", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "VerticalUp", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
  ],
  enabled: true,
  description: [
    ["addCurl", "Thumb", "NoCurl", 1],
    ["addDirection", "Thumb", "DiagonalUpLeft", 1],
    ["addDirection", "Thumb", "HorizontalLeft", 0.034482758620689655],
    ["addCurl", "Index", "NoCurl", 1],
    ["addDirection", "Index", "DiagonalUpLeft", 1],
    ["addCurl", "Middle", "NoCurl", 1],
    ["addDirection", "Middle", "DiagonalUpLeft", 1],
    ["addCurl", "Ring", "FullCurl", 1],
    ["addDirection", "Ring", "DiagonalUpLeft", 1],
    ["addCurl", "Pinky", "FullCurl", 1],
    ["addDirection", "Pinky", "DiagonalUpLeft", 1],
    ["addDirection", "Pinky", "HorizontalLeft", 0.034482758620689655],
  ],
  enabled: true,
});
