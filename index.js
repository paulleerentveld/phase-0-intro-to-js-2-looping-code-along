// Code your solutions in this file

function writeCards(arr,note) {
    const newArr=[]
    for (let i =0; i< arr.length; i++) {
        let name = arr[i];
        newArr.push(`Thank you, ${name}, for the wonderful ${note} gift!`);
    }
    return newArr;
}

function countDown(num) {
    let i= -1;
    while (i < num ) {
        console.log(num--);
    }

}