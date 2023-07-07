// Find The Minimum  and Maximum Number in Array.

function findMinMax(array) {

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < array.length; i++) {

        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log("min : " + min);
    console.log("max : " + max);
}

findMinMax([2, 4, 6, 8, 23, 85]);