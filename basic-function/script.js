function add7(num) {
  return num + 7;
}
console.log(add7(5));

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 12));

function capitalize(text) {
  let srt = text.toLowerCase();
  console.log(srt);
  return srt[0].toUpperCase() + srt.slice(1);
}
console.log(capitalize("LOVE YOU"));

function lastLetter(text) {
  let lastlet = text[text.length - 1];
  return lastlet;
}
console.log(lastLetter("LOVE YOU"));
