const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
const newTut = tutorials.map((tut) => {
  const splitTut = tut.split(" ")
  const splitEl = splitTut.map((element) => {
    return element.charAt(0).toLocaleUpperCase() + element.substring(1)
  })
   const string = splitEl.join(" ")
   return string
})
  return newTut
}

// const tutsplit = newTut.map((tut) => {
//   return newTut.split(" ")
// })

// console.log(tutsplit)
//console.log(newTut)






//  const fun = (s) => {
//  let newStr = ""
//   for (let i = 0; i > s.length; i++)
//       if (i === 0) {
//         newStr += s[i].toUpperCase()

//       } else {
//         newStr += s[i];
//       }
//       return newStr
//  }

// const funct = (sentence) => {
//   const words = sentence.split(' ');
//   const newArr = words.map(fun)
//   return newArr.join(' ')

// }

// const words = x.split(' ');


// const titleCased = () => {
//   const newArray = tutorials.map()
  
//   return newArray
// }
