function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let result = callback(arr[i], i, arr)
        if (result)
            return i;
    }
    return -1;
}