let likesGiven = 0;
setInterval(() => {
let heart = document.getElementsByClassName("fr66n")[0].getElementsByClassName("wpO6b")[0],
arrow = document.getElementsByClassName(" l8mY4 feth3")[0].getElementsByClassName("wpO6b")[0];
if (heart) {
likesGiven++;
heart.click();
}
arrow.click();
console.log('You have liked ${likesGiven} post(s)!');
}, 7500);