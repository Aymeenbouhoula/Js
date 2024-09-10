//reverse the word "hello" to "olleh" //
// function reverse (str){
//     return str.split("").reverse().join("");}
// console.log(reverse("hello"))

// function reverse2(str){
//     let A = str.split("")
//     A.pop()
//     A.shift()
//     A[0]= 'o'
//     A.push('e')
//     A.push('h')
//     let B = A
//     return B.join('')
// }
// console.log(reverse2("hello")) //

// console.log ('|| ====================================|| ')
// // count number of length //
// function count(str){
//     let nb = str.length
//     return nb
// }
// console.log(count("hello"))

// function countChar(str){
//     let count= 0;
//     let i =0
//     while (str[i] === true){
//         count++;
//         i++
//     }
//     return count
// }
// console.log(count('hello'))

// console.log ('|| ====================================|| ')

// fist lettre en calipalize //
function Capitalizee(str){
    let rslt = str.charAt(0).toUpperCase()+ str.slice(1);
    return rslt
}
console.log(Capitalizee("hello"))

function transformation (message){
    //separation des mots
    const worlds = message.split(" ")
    //creation new array for results
    const rslt = []

    for (let word of worlds){
        // transformation premier lettre en majiscule ==> ["hello", "world"] ==> ["Hello", "World"]
        rslt.push (word.charAt(0).toUpperCase() + word.slice(1))
    }
    // transpormation de ["Hello", "World"] ===> "Hello World"
    return rslt.join(" ")

}
console.log(transformation("hello world"))


let a= "aymen"
console.log(a[0])
// // Transform string To Array //
// let A = "aymen"
//  let B =A.split("")
//  console.log(B)

// // Transforme array to String //
// let z = ['a','y','m','e','n']
// let b = z.join("")
// console.log(b)

// let char = "basket"
// console.log(char)
// let a= char.split("")
// console.log(a)
// let b=a.reverse()
// console.log(b)
// let c = b.join("")
// console.log(c)

// function rev (char){
//     return char.split("").reverse().join("")
// }
// console.log(rev(char))




// ***********************************************************************
// function ln(str) {
//   let sum = 0;
//   let i = 0;
//   while (str[i] === true) {
//     sum++;
//     i++;
//   }
//   return sum;
// }
// console.log(sum("aymen"));

// function countChar(str){
//     let count= 0;
//     let i =0
//     while (str[i] === true){
//         count++;
//         i++
//     }
//     return count
// }
// console.log(count('hello'))
//*********************************************************************** */


// MANIMUM OF ARRAY 
array = [10,-2,-20,24,50]
function Minimun(array){
    let min = Math.min(...array)
    return min
}
console.log(Minimun(array))


//MAXIMUM OF ARRAY 
function Maximun(array){
    let max = Math.max(...array)
    return max
}
console.log(Maximun(array))



// SOMME OF ARRAY 
array2 = [10,-2,-20,24,50]
let sum = 0 ;
function somme(array2){
    for (e of array2){
    
        sum += e
    }
    return sum
}
console.log(somme (array2))



// FILTER EVEN or ODD
array3 = [10,5,41,24,50]
function filtre1 (array3){
    for (e of array3){
        if (e % 2 ===0){
            console.log(e + " " + "is even")
        }
        else{
            console.log(e + " " + "is odd")
        }
    }
}
filtre1(array3)

console.log("||==================||")
console.log("||==================||")


//  FILTER TRUE or FALSE 
array4 = [10,"",true,24,"aymen",0]
function filtre2(array4){
    for (e of array4){
        if (!!e === true){
            console.log(e + ' '+ "is True")
        }
        else{
            console.log(e + ' '+ "is False ")

        }
    }
}
filtre2(array4)
console.log("||==================||")

console.log("||==================||")

// FACTORIEL ****************** 











//***************************** */

//PRIME NUMBERS ////////////
ab = [0,1,10,20,-25,5,3,2,4]
function prime(ab){
    for (e of ab){
        if  (e >= 1 && e / e === 1 && e <= 5 && e!== 4){  
            console.log(e + ' ' + "is prime ")
        }
        else {
        console.log(e + ' ' + "is not prime ")
        }
    }
}
prime(ab)

console.log("||==================||")
console.log("||==================||")








