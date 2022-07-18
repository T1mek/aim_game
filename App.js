const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector('.board')
const color = ["#19de20","#102edab5","#f610a9f2","#ee6204f2"," #a610f6f2"]



let time = 0;
let score = 0

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    startGame();
  }
});

board.addEventListener("click",(event)=>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame() {
  screens[1].classList.add("up");
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
    if(time===0){
    finishGame()
    }
    else{
        let current= --time
        if(current<10){
          current = `0${current}`
        }
        setTime(current)
    }
 
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}
function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1> Cчет: <span class='primary'> ${score}</span></h1>`
} 
function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width,height} = board.getBoundingClientRect()
    const x =getRandomNumber(0,width-size)
    const y= getRandomNumber(0,height-size)

    setColor(circle)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height =`${size}px`
    circle.style.top =`${y}px`
    circle.style.left =`${x}px`
    board.append(circle)
}
function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}

function getColor(){
    const index = Math.floor( Math.random() * color.length)
    return color[index]
    
}
function setColor(e){
    const color = getColor()
    e.style.backgroundColor = color
    e.style.boxShadow = ` 0 0 2px ${color} , 0 0 10px ${color}`

}