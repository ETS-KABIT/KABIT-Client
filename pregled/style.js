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
    rasvetaBox.classList.remove("display")
    grejanjeBox.classList.add("display")
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
    rasvetaBox.classList.add("display")
    grejanjeBox.classList.remove("display")

    dropdownnButton.addEventListener('click', function(e) {
        if (checkStatus == true && settingsWindow == "grejanje") {
            grejanjeBox.classList.remove("display")
        } else {
            grejanjeBox.classList.add("display")

        }
    })
    var buttonMerenja = document.querySelectorAll(".button-merenja")
    for (var i = 0; i < buttonMerenja.length; i++) {
        buttonMerenja[i].addEventListener("click", function(e) {
            var graphicBox = document.querySelector(".graphic")
            graphicBox.classList.remove("display")
            var vreme = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"];
            if (this.value == "prizemlje") {
                var tempPrizemlje = [28, 28, 29, 30, 25, 30];
                new Chart("myChart", {
                    type: "line",
                    data: {
                        labels: vreme,
                        datasets: [{
                            fill: false,
                            lineTension: 0,
                            backgroundColor: '#00a2ff',
                            color: "#00a2ff",
                            borderColor: "#00a2ff",
                            data: tempPrizemlje
                        }]
                    },
                    options: {
                        legend: { display: false },
                        scales: {
                            y: {
                                suggestedMin: 10,
                                suggestedMax: 40
                            },
                            x: {
                                suggestedMin: 10,
                                suggestedMax: 40
                            },
                        }
                    }
                });
            } else if (this.value == "prvi-sprat") {
                var tempPrviSprat = [25, 23, 24, 25, 25];
                new Chart("myChart", {
                    type: "line",
                    data: {
                        labels: vreme,
                        datasets: [{
                            fill: false,
                            lineTension: 0,
                            backgroundColor: '#00a2ff',
                            color: "#00a2ff",
                            borderColor: "#00a2ff",
                            data: tempPrviSprat
                        }]
                    },
                    options: {
                        legend: { display: false },
                        scales: {
                            y: {
                                suggestedMin: 10,
                                suggestedMax: 40
                            },
                            x: {
                                suggestedMin: 0,
                                suggestedMax: 24
                            },
                        }
                    }
                });
            } else {
                var tempSpoljasnja = [22, 23, 24, 25, 25, 31];
                new Chart("myChart", {
                    type: "line",
                    data: {
                        labels: vreme,
                        datasets: [{
                            fill: false,
                            lineTension: 0,
                            backgroundColor: '#00a2ff',
                            color: "#00a2ff",
                            borderColor: "#00a2ff",
                            data: tempSpoljasnja
                        }]
                    },
                    options: {
                        legend: { display: false },
                        scales: {
                            y: {
                                suggestedMin: 10,
                                suggestedMax: 40
                            },
                            x: {
                                suggestedMin: 10,
                                suggestedMax: 40
                            },
                        }
                    }
                });
            }

        })
    }
    checkStatus = !checkStatus;
})
const ventilacija = document.querySelector("#ventilacija").addEventListener('click', function(e) {
    settingsWindow = "ventilacija"
    navigation.classList.remove("slide")
    navigation.classList.add("reverse-slide")
    img.setAttribute(
        'src',
        '/assets/kontrola/down-arrow.png',
    );

    var dropdownnButton = document.querySelector("#drpdwn-btn")
    rasvetaBox.classList.add("display")
    grejanjeBox.classList.add("display")
    ventilacijaBox.classList.remove("display")

    dropdownnButton.addEventListener('click', function(e) {
        if (checkStatus == true && settingsWindow == "rasveta") {
            ventilacijaBox.classList.remove("display")
        } else {
            ventilacijaBox.classList.add("display")

        }
    })
    checkStatus = !checkStatus;

})
const susara = document.querySelector("#susara").addEventListener('click', function(e) {
    settingsWindow = "susara"
    navigation.classList.remove("slide")
    navigation.classList.add("reverse-slide")
    img.setAttribute(
        'src',
        '/assets/kontrola/down-arrow.png',
    );

    var dropdownnButton = document.querySelector("#drpdwn-btn")
    rasvetaBox.classList.add("display")
    grejanjeBox.classList.add("display")
    ventilacijaBox.classList.add("display")
    susaraBox.classList.remove("display")

    dropdownnButton.addEventListener('click', function(e) {
        if (checkStatus == true && settingsWindow == "rasveta") {
            susaraBox.classList.remove("display")
        } else {
            susaraBox.classList.add("display")

        }
    })
    checkStatus = !checkStatus;

})