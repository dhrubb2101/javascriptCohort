console.log("test") //$0 on browser during inspeact element reresents the current element you're selecting on webpage

function updateClock() {
    const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")

const now = new Date()
const hours = now.getHours() % 12
console.log(hours)
const minutes = now.getMinutes().toString().padStart(2, "0")
console.log(minutes); //added .string.padStart in minutes so that 1 - 9 minutes we have return two digits so always return 01-09 minutes like this so used above operations
//or another solution could be
//minutes < 10 ? `0${minutes}` : `${minutes}`;
const seconds = now.getSeconds().toString().padStart(2, "0")
const ampm = now.getHours() >= 12 ? "PM" : "AM"
// const time = 0 || 12
// console.log(time)
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()
// const ampm = hours >= 12 ? "PM" : "AM"
// const formattedTime = `${String(hours % 12).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`
// timeElement.textContent = formattedTime

//we collected a lot of data here now we have store it.

timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`

}
//======



setInterval(updateClock, interval)