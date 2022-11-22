let checkStatus = true;
var navigation = document.querySelector("nav")
var img = document.querySelector("#image")

var rasvetaBox = document.querySelector(".rasveta-box")
var grejanjeBox = document.querySelector(".grejanje-box")
var ventilacijaBox = document.querySelector(".ventilacija-box")
var susaraBox = document.querySelector(".susara-box")

const dropdownnButton = document.querySelector("#drpdwn-btn").addEventListener('click', function(e) {
    if (checkStatus) {
        navigation.classList.remove("reverse-slide")
        navigation.classList.add("slide")
        img.setAttribute(
            'src',
            '/assets/kontrola/up-arrow.png',
        )
        checkStatus = !checkStatus;

    } else if (!checkStatus) {
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/assets/kontrola/down-arrow.png',
        );
        checkStatus = !checkStatus;
    }
})
const rasveta = document.querySelector("#rasveta").addEventListener('click', function(e) {
    settingsWindow = "rasveta"
    navigation.classList.remove("slide")
    navigation.classList.add("reverse-slide")
    img.setAttribute(
        'src',
        '/assets/kontrola/down-arrow.png',
    );

    var dropdownnButton = document.querySelector("#drpdwn-btn")
    rasvetaBox.classList.add("display")


    dropdownnButton.addEventListener('click', function(e) {
        if (checkStatus == true && settingsWindow == "rasveta") {
            rasvetaBox.classList.remove("display")
        } else {
            rasvetaBox.classList.add("display")

        }
    })
    checkStatus = !checkStatus;

})
const grejanje = document.querySelector("#grejanje").addEventListener('click', function(e) {
        settingsWindow = "grejanje"
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/assets/kontrola/down-arrow.png',
        );

        var dropdownnButton = document.querySelector("#drpdwn-btn")
        grejanjeBox.classList.remove("display")
        rasvetaBox.classList.add("display")



        dropdownnButton.addEventListener('click', function(e) {
            if (checkStatus == true && settingsWindow == "grejanje") {
                grejanjeBox.classList.remove("display")
            } else {
                grejanjeBox.classList.add("display")

            }
        })
        checkStatus = !checkStatus;

    })
    //rasveta
    // var rasveta = document.querySelector("#rasveta").addEventListener('click', function(e) {
    //     rasvetaBox.classList.remove("display");
    //     grejanjeBox.classList.add("display");
    //     ventilacijaBox.classList.add("display");
    //     susaraBox.classList.add("display");
    // })
    // var grejanje = document.querySelector("#grejanje").addEventListener('click', function(e) {
    //     rasvetaBox.classList.add("display");
    //     grejanjeBox.classList.remove("display");
    //     ventilacijaBox.classList.add("display");
    //     susaraBox.classList.add("display");
    // })
    // var ventilacija = document.querySelector("#ventilacija").addEventListener('click', function(e) {
    //     rasvetaBox.classList.add("display");
    //     grejanjeBox.classList.add("display");
    //     ventilacijaBox.classList.remove("display");
    //     susaraBox.classList.add("display");
    // })
    // var susara = document.querySelector("#susara").addEventListener('click', function(e) {
    //     rasvetaBox.classList.add("display");
    //     grejanjeBox.classList.add("display");
    //     ventilacijaBox.classList.add("display");
    //     susaraBox.classList.remove("display");
    // })