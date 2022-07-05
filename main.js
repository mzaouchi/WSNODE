// console.log('Hello NODE')

// function Sum(a,b){
//     return a+b
// }

// console.log(Sum(2,4))

const Sum=(a,b)=>{
    return a+b
}

// console.log(Sum(5,8))

// console.log(process.argv)

// console.log(process.argv[2])

// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Sum(+process.argv[2],+process.argv[3]))

// const Sous = require('./moduleLocal')
// const Multi = require('./moduleLocal')

// console.log(Sous(+process.argv[2],+process.argv[3]))

// console.log(Multi(+process.argv[2],+process.argv[3]))


// const obj = require('./moduleLocal')


// console.log(obj.Sous(+process.argv[2],+process.argv[3]))

// console.log(obj.Multi(+process.argv[2],+process.argv[3]))



const {Sous,Multi} = require('./moduleLocal')


console.log(Sous(+process.argv[2],+process.argv[3]))

console.log(Multi(+process.argv[2],+process.argv[3]))



