// console.log(window)

function changeBackground(color){
    document.body.style.backgroundColor = color
}

const themeButton = document.getElementById('theme-button')

// darkButton.innerText = 'hahahhas'
themeButton.addEventListener('click', ()=> {
    console.log(document.body.style.backgroundColor)
    const currentColor = document.body.style.backgroundColor
    if(!currentColor || currentColor === 'white'){
        changeBackground('black')
        themeButton.innerText = 'Light Mode'
    }else{
        changeBackground('white')
        themeButton.innerText = 'Dark Mode'
    }

})

// themeButton.addEventListener('click', function(){
//     console.log('Storing Dark Mode value in DB')
