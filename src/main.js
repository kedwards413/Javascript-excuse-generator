/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "destroyed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
var kaela =
  excuseGenerator(who) +
  " " +
  excuseGenerator(action) +
  " " +
  excuseGenerator(what) +
  " " +
  excuseGenerator(when);

window.onload = function() {
  console.log(kaela);
};

document.write(kaela);
