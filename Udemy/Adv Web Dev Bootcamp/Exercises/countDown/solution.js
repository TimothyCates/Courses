function countDown(seconds) {
    if (seconds >= 1) {
        console.log(seconds);
        setTimeout(() => {
            countDown(--seconds);
        }, 1000);
    } else {
        console.log("Ring Ring!!!")
    }
}