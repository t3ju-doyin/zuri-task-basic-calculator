function calculator(numOne,numTwo){
    let addition = numOne +numTwo
    let subtraction = numOne - numTwo
    let multiplication = numOne * numTwo
    if (numTwo === 0){
        return 'cannot be computed'
    }else{
        division = numOne/numTwo
    }
    console.log(`\n Their sum  is ${addition}
    \n Their difference  is ${subtraction}
    \n Their product  is ${multiplication}
    \n Their division  is ${division} `)
}
calculator(2,5)