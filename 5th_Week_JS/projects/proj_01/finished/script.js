console.log("test") //$0 on browser during inspeact element reresents the current element you're selecting on webpage

function updateClock() {
    const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")

const now = new Date()
const hours = now.getHours() % 12 || 12
console.log(hours)
const minutes = now.getMinutes().toString().padStart(2, "0")
//padStart ensures two-digit format for minutes
//padStart(maxLen, number)
//now.getMinutes()

// Returns the current minutes (0–59) as a number.
// Example: 5
// .toString()
// Converts that number into a string, because padStart works only on strings.
// Example: 5 → "5"
// .padStart(2, "0")
// Ensures the string is at least 2 characters long.
// If it’s shorter, it adds "0" at the beginning.
// Example:
// "5".padStart(2, "0") → "05"
// "12".padStart(2, "0") → "12" (unchanged)
//✅ So, the whole line guarantees that minutes will always be two digits ("00"–"59"), which is the standard clock format.


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



setInterval(updateClock, 1000)
//setInterval mtlab mei har interval mei kuch kaam krunga aur krte he rhunga
//basically interval set krta hai jismei voh kaam krega and krta he rahega
//ams setTimeout ka use karke hum ek baar kaam kar sakte hain
//setTimeout hai basically ki itni der baad mei yeh krunga
//setTimeout(updateClock, interval)
//bas ek baar use hota hai
//setInterval(callbackFunction, interval)

updateClock()

//window.onload = updateClock

//=====================================

//For date part go through the MDN documentation

// Date.prototype.toLocaleDateString()
// This method returns a string with a language-sensitive representation of the date portion of this date.
// Basically first parameter for it defines the area timezone like PST etc and second parameter is for options like weekday, year, month, day etc
// Example:
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = now.toLocaleDateString('en-US', options);
// dateElement.textContent = formattedDate;
//or
//dateElement.textContent = now.toLocaleDateString('en-US', options);
//dateElement.textContent = now.toLocaleDateString('undefined', options);
