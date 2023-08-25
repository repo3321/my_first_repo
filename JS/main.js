let section = document.querySelector(".ourskll")

let spans = document.querySelectorAll(".ourskll .container .pack > div > div > span")

// ===========================================================================================
let nums = document.querySelectorAll(".awesome .container .pack .one")
let sec = document.querySelector(".awesome")

let start = false ; 

// ===========================================================================================
let button = document.querySelector("button") ; 

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 300) {
        spans.forEach(function(span) {
            span.style.width = span.dataset.width 
        })
    }
    if (window.scrollY >= sec.offsetTop - 300) {
        if (!start) {
            nums.forEach(function(ele) {
                hello(ele)
            })
            start = true
        }
    }
    if(window.scrollY >= 400) {
        button.style.display = "flex"
    } else {
        button.style.display = "none"
    }
}

// let nums = document.querySelectorAll(".awesome .container .pack .one")
// let sec = document.querySelector(".awesome")

// let start = false ; 



// window.onscroll = function () {
//     if (window.scrollY >= sec.offsetTop - 300) {
//         if (!start) {
//             nums.forEach(function(ele) {
//                 hello(ele)
//             })
//             start = true
//         }
//     }
// }
function hello(el) {
    let goal = el.dataset.num ;
                let count = setInterval(function(){
                    el.textContent++;
                    if(el.textContent == goal) {
                        clearInterval(count)
                    }
                },2000 / goal)
}

// let button = document.querySelector("button") ; 

// window.onscroll = function () {
//     if(window.scrollY >= 400) {
//         button.style.display = "flex"
//     } else {
//         button.style.display = "none"
//     }
// }

button.addEventListener("click" , function() {
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
})