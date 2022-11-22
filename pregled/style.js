let checkStatus = true;
var navigation = document.querySelector("nav")
var img = document.querySelector("#image")

var rasvetaBox = document.querySelector(".rasveta-box")
var grejanjeBox = document.querySelector(".grejanje-box")
var ventilacijaBox = document.querySelector(".ventilacija-box")
var susaraBox = document.querySelector(".susara-box")
    // #################################################################
    // #################################################################
    // #################################################################

google.charts.load('current', { packages: ['corechart'] });

function prizemlje() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50, 7],
        [60, 8],
        [70, 8],
        [80, 9],
        [90, 9],
        [100, 9],
        [110, 10],
        [120, 11],
        [130, 14],
        [140, 14],
        [150, 15]
    ]);
    // Set Options
    var options = {
        title: 'Prizemlje',
        hAxis: { title: 'Vreme' },
        vAxis: { title: 'Temperatura' },
        legend: 'none'
    };
    // Draw
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
}
// #################################################################
// #################################################################
// #################################################################

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
            console.log(this)
            if (this.value == "prizemlje") {
                google.charts.setOnLoadCallback(prizemlje);

            } else if (this.value == "prvi-sprat") {
                grafik.innerHTML = `<p>Prvi sprat</p>`
            } else {
                grafik.innerHTML = `<p>Spoljasnja</p>`
            }
        })
    }
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