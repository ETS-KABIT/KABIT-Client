// rasveta
function runRasveta() {
    var xhr = new XMLHttpRequest();
    var url = '/request/nadzor/rasveta';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            //send complete JSON 
            var DnevnaSoba = document.querySelector("#dnevna-soba-intenzitet")
            var Kupatilo = document.querySelector("#kupatilo-intenzitet")
            var Hodnik = document.querySelector("#hodnik-intenzitet")
            var Stepenice = document.querySelector("#stepenice-intenzitet")
            var Soba1 = document.querySelector("#soba-1-intenzitet")
            var Soba2 = document.querySelector("#soba-2-intenzitet")

        }

    }
    xhr.send();
}
runRasveta()
setInterval(runRasveta, 3000)
    //GREJANJE prizemlje tren temp1
function runPrizemlje() {
    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();
    // Making our connection  
    var url = '/request/temp/prizemlje';
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var trenTempPrizemlje = document.querySelector("#prizemlje-temp")
                console.log(this.responseText);
            }
        }
        // Sending our request 
    xhr.send();
}
runPrizemlje()
    //GREJANJE prvi sprat tren temp1
function runPrviSprat() {
    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    var url = '/request/temp/prvi-sprat';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trenTempPrviSprat = document.querySelector("#trenutna-temperatura-prvi-sprat")
            console.log(this.responseText);

        }
    }
    xhr.send();
}

runPrviSprat()

function runSpoljasnja() {
    var xhr = new XMLHttpRequest();
    var url = '/request/temp/spoljasnja';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trenTempSpolja = document.querySelector("#spoljasnja-temp")
            console.log(this.responseText);

        }
    }
    xhr.send();
}
runSpoljasnja()
setInterval(runPrizemlje, 10000)
setInterval(runPrviSprat, 10000)
setInterval(runSpoljasnja, 10000)


function runVentilacijaProzor1() {
    var xhr = new XMLHttpRequest();
    var url = '/request/ventilacija/prozor1';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var prozor1 = document.querySelector("#prozor1-state")
            prozor1.innerHTML = this.responseText
            console.log(this.responseText);

        }
    }
    xhr.send();
}
runVentilacijaProzor1()

function runVentilacijaProzor2() {
    var xhr = new XMLHttpRequest();
    var url = '/request/ventilacija/prozor1';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var prozor2 = document.querySelector("#prozor2-state")
            prozor2.innerHTML = this.responseText
            console.log(this.responseText);

        }
    }
    xhr.send();
}
runVentilacijaProzor2()
setInterval(runVentilacijaProzor1, 3000)
setInterval(runVentilacijaProzor2, 3000)

function runSusaraTemp() {
    var xhr = new XMLHttpRequest();
    var url = '/request/susara/temp';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var temp = document.querySelector("#susara-temp")
            temp.innerHTML = this.responseText
            console.log(this.responseText);

        }
    }
    xhr.send();
}
runSusaraTemp()

function runSusaraHumidity() {
    var xhr = new XMLHttpRequest();
    var url = '/request/susara/humidity';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var humidity = document.querySelector("#susara-humidity")
            humidity.innerHTML = this.responseText
            console.log(this.responseText);
        }
    }
    xhr.send();
    w
}
runSusaraHumidity()