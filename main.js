const form = document.querySelector('form')
const cardholderName = document.querySelector("#cardholderName")
const cardholderNameFB = document.querySelector("#cardHolderNameFB")

const cardNumber = document.querySelector("#cardNumber")
const cardNumberFB = document.querySelector("#cardNumberFB")

const expiryDateMonth = document.querySelector("#expiryDateMonth")
const expiryDateMonthFB = document.querySelector("#expiryDateMonthFB")

const expiryDateYear = document.querySelector("#expiryDateYear")
const expiryDateYearFB = document.querySelector("#expiryDateYearFB")

const cvc = document.querySelector("#cvc")
const cvcFB = document.querySelector("#cvcFB")

const comletedForm = document.querySelector(".rightSide__completedForm")
const mainForm = document.querySelector(".rightSide__mainForm")

form.addEventListener('submit', (e) => {
    let errors = 0

    //Cardholder Name Validation
    if (cardholderName.value === '' || cardholderName.value == null) {
        cardholderNameFB.style.display = "block"
        cardholderNameFB.innerText = "Can't be blank"
        errors += 1
    }
    else {
        cardholderNameFB.style.display = "none"
    }

    //Card Number Validation
    if (cardNumber.value === '' || cardNumber.value == null) {
        cardNumberFB.style.display = "block"
        cardNumberFB.innerText = "Can't be blank"
        errors += 1
    }
    else if (isNaN(cardNumber.value)) {
        cardNumberFB.style.display = "block"
        cardNumberFB.innerText = "Wrong format. Numbers Only"
        errors += 1
    }
    else if (cardNumber.value.length != 16) {
        cardNumberFB.style.display = "block"
        cardNumberFB.innerText = "Incorrect Number Length"
        errors += 1
    }
    else {
        cardNumberFB.style.display = "none"
    }

    //Expiry Date Month Validation
    if (expiryDateMonth.value === '' || expiryDateMonth.value == null) {
        expiryDateMonthFB.style.display = "block"
        expiryDateMonthFB.innerText = "Can't be blank"
        errors += 1
    }
    else if (isNaN(expiryDateMonth.value) || expiryDateMonth.value.length != 2) {
        expiryDateMonthFB.style.display = "block"
        expiryDateMonthFB.innerText = "Wrong format"
        errors += 1
    }
    else if (parseInt(expiryDateMonth.value) > 12 || parseInt(expiryDateMonth.value) < 1) {
        expiryDateMonthFB.style.display = "block"
        expiryDateMonthFB.innerText = "Out of Range"
        errors += 1
    }
    else {
        expiryDateMonthFB.style.display = "none"
    }
    
    //Expiry Date Year Validation
    if (expiryDateYear.value === '' || expiryDateYear.value == null) {
        expiryDateYearFB.style.display = "block"
        expiryDateYearFB.innerText = "Can't be blank"
        errors += 1
    }
    else if (isNaN(expiryDateYear.value) || expiryDateYear.value.length != 2) {
        expiryDateYearFB.style.display = "block"
        expiryDateYearFB.innerText = "Wrong format"
        errors += 1
    }
    else {
        expiryDateYearFB.style.display = "none"
    }

    //CVC Validation
    if (cvc.value === '' || cvc.value == null) {
        cvcFB.style.display = "block"
        cvcFB.innerText = "Can't be blank"
        errors += 1
    }
    else {
        cvcFB.style.display = "none"
    }

    if (errors > 0) {
        console.log("error")
        e.preventDefault()
    }
})