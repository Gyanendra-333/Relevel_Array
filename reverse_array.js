function reverseArray(array) {
    const result = [];
    let j = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        result[j] = array[i];
        j++;
    }
    console.log(result);
}
reverseArray([1, 2, 3, 4, 5]);
reverseArray([3, 21, 23, 24, 25]);
reverseArray([12, 24, 35, 46, 59]); 
