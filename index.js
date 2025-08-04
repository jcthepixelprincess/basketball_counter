let count = 0

let countEl = document.getElementById("count-el")


function increment1() {
    count += 1;
    let countEl = document.getElementById("count-el")
    countEl.textContent = count;
}

function increment2() {
    count += 2;
    let countEl = document.getElementById("count-el")
    countEl.textContent = count;
}

function increment3() {
    count += 2;
    let countEl = document.getElementById("count-el")
    countEl.textContent = count;
}

let guestcount = 0

let gcountEl = document.getElementById("gcount-el")

function increment1guest() {
    guestcount += 1;
    let gcountEl = document.getElementById("gcount-el")
    gcountEl.textContent = guestcount
}

function increment2guest() {
    guestcount += 2;
    let gcountEl = document.getElementById("gcount-el")
    gcountEl.textContent = guestcount
}

function increment3guest() {
    guestcount += 3;
    let gcountEl = document.getElementById("gcount-el")
    gcountEl.textContent = guestcount
}

