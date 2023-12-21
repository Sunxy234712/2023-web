let myHeading = document.querySelector('.h1')
myHeading.textContent = 'hello world!'


let name = 'li lei'
let flag = false;
let num = 0;
let arr = ['li lei', 'han mei mei']
let obj = { name: 'li lei', age: 18 }

// if (flag) {
//     alert('我不喜欢吃巧克力！')
// } else {
//     alert('我喜欢吃巧克力！')
// }

let add = function (x, y) {
    return x + y
}
let addRes = add(1, 20);
console.log('addRes', addRes)


document.querySelector('.myBtn').addEventListener('click', () => {
    alert('别戳我，我怕疼！')
})