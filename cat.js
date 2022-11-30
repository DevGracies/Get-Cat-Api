const cat = document.getElementById('cat')
const apiCat = document.getElementById('api')
const made = document.getElementsByTagName('h3')
const resp = 'https://meowfacts.herokuapp.com/'
//meowfacts.herokuapp.com/

https: apiCat.addEventListener('click', nameCat)
function nameCat() {
  fetch(resp)
    .then((response) => response.json())
    .then((data) => (cat.innerHtml = data.data))
}

const myArray = [
  'mary',
  {
    catNames: 'pat',
  },
  23,
  function fun(a, b) {
    return a + b * 10
  },
  'beloved',
  true,
]

// console.log(myArray.concat('peace'))
// console.log(myArray.copyWithin(true))
// console.log(myArray.[3])

// made.addEventListener('click', () => {
//   if (condition) {
//   } else {
//   }
// })
// function cat() {
//   made.style.h3 = `<ul>
//    <li>Cat Name</li>
//    <li>Cat Colour</li>
//    <li>Cat Identity</li>
//    </ul>`
// }
