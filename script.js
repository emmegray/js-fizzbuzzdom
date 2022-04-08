for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        scrivi("FizzBuzz");
    } else if (index % 3 === 0) {
        scrivi("Fizz");
    } else if (index % 5 === 0) {
        scrivi("Buzz");
    } else {
        scrivi(`${index}`);
    }
}

function scrivi(testo) {
    var classe = testo.toLowerCase()

    document
        .getElementById("container")
        .innerHTML = document
        .getElementById("container")
        .innerHTML + `<li class="${classe}">${testo}</li>`
}

