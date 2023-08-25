// let imad = {
//     talk() {
//         return "Talking" ; 
//     }
// }
// let sdahmed = {
//     talk() {
//         return "Talking" ; 
//     }
// }
// let bob = {
//     talk() {
//         return "Talking" ; 
//     }
// }
// let adoula = {
//     talk() {
//         return "Talking" ; 
//     }
// }
// let cherfouhi = {
//     talk() {
//         return "Talking" ; 
//     }
// }

// console.log(imad.talk());
// console.log(sdahmed.talk());
// console.log(bob.talk());
// console.log(adoula.talk());
// console.log(cherfouhi.talk());

// console.log("this is bad syntax ... ") ; 

// let Person = class {
//     talk() {
//         return "Talking with class inhirite" ; 
//     }
// } ; 

// imad = new Person ; 
// bob = new Person ; 
// cherfouhi = new Person ; 
// sdahmed = new Person ; 
// adoula = new Person ; 

// console.log(imad.talk());
// console.log(sdahmed.talk());
// console.log(bob.talk());
// console.log(adoula.talk());
// console.log(cherfouhi.talk());


// Person.prototype.talk = function () {
//     return 'hello there' ; 
// }
// console.log(cherfouhi.talk());

// imad.__proto__.talk = function () {
//     return 'hello' ; 
// }

// console.log(imad.talk());


// let me = {
//     name : "imad" ,
//     talk : function () {
//         return `Hello ${this.name} how are you ! `
//     }
// }
// let djemmah = {
//     name : "djemmah" ,
//     talk : function () {
//         return `Hello ${this.name} how are you ! `
//     }
// }
// console.log(me.talk())
// console.log(djemmah.talk())
// me.name = "imedd"
// console.log(me.talk())
// console.log(djemmah.talk())


// let myFact = function (name) {
//     return {
//         talk : function () {
//             return `Hello ${name} how are you ! `
//         }
//     }
// }

// let mee = myFact("Imaaddd") ; 
// console.log(me.talk())
// mee.name = "fff"
// console.log(me.talk())

// function Person(name) {
//     this.name = name ,
//     this.talk = function () {
//         return `hello ${this.name}`
//     }
// }

// let imd = new Person("imd") ; 

// console.log(imd.talk()); 


// 

// let hello = "imad" ; 

// let talk = () => {
//     return `hello my name is ${this.hello}` ; 
// }

// console.log(talk());
// console.log(this)

function getWeather() {
    return  new Promise((resolve , rejected) => {
        setTimeout (() => {
            let x = null ;
            if(x) {
                resolve('sunny')
            } else {
                rejected("error")
            }
        },0)
    } ); ; 
}

function whenSuccess(data) {
    console.log(data)
}
function whenReject(data) {
    console.log(data)
}

getWeather().then(whenSuccess).catch(whenReject).finally(()=> {
    console.log("goodBey")
})