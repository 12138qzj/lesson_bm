function createPhoneNumber(numbers) {


    let numberstr = numbers.join('');
    console.log(`(${numberstr.substring(0,3)}) ${numberstr.substring(3,6)}-${numberstr.substring(6)}`);
    //特点 :代码连贯且易读
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));