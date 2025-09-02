console.log("test") //$0 on browser during inspeact element reresents the current element you're selecting on webpage

const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")

const now = new Date()
const hours = now.getHours() % 12
console.log(hours)

const time = 0 || 12
console.log(time)
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()
// const ampm = hours >= 12 ? "PM" : "AM"
// const formattedTime = `${String(hours % 12).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`
// timeElement.textContent = formattedTime
