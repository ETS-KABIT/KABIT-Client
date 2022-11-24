// rasveta
function runRasvetaDnevnaSoba() {
    var xhr = new XMLHttpRequest();
    var url = '/request/rasveta/dnevnaSoba';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var DnevnaSoba = document.querySelector("#dnevna-soba-intenzitet")
            DnevnaSoba.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runRasvetaKupatilo() {
    var xhr = new XMLHttpRequest();
    var url = '/request/rasveta/kupatilo';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var Kupatilo = document.querySelector("#kupatilo-intenzitet")
            Kupatilo.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runRasvetaHodnik() {
    var xhr = new XMLHttpRequest();
    var url = '/request/rasveta/hodnik';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var Hodnik = document.querySelector("#hodnik-intenzitet")
            Hodnik.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runRasvetaStepenice() {
    var xhr = new XMLHttpRequest();
    var url = '/request/rasveta/stepenice';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var Stepenice = document.querySelector("#stepenice-intenzitet")
            Stepenice.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runRasvetaSoba1() {
    var xhr = new XMLHttpRequest();
    var url = '/request/rasveta/soba1';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var Soba1 = document.querySelector("#soba-1-intenzitet")
            Soba1.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runRasvetaSoba2() {
    var xhr = new XMLHttpRequest();
    var url = '/request/rasveta/soba2';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var Soba2 = document.querySelector("#soba-2-intenzitet")
            Soba2.innerHTML = this.responseText
        }
    }
    xhr.send();
}
runRasvetaDnevnaSoba()
runRasvetaKupatilo()
runRasvetaHodnik()
runRasvetaStepenice()
runRasvetaSoba1()
runRasvetaSoba2()
setInterval(runRasvetaDnevnaSoba, 3000)
setInterval(runRasvetaKupatilo, 3000)
setInterval(runRasvetaHodnik, 3000)
setInterval(runRasvetaStepenice, 3000)
setInterval(runRasvetaSoba1, 3000)
setInterval(runRasvetaSoba2, 3000)

function runPrizemlje() {
    var xhr = new XMLHttpRequest();
    var url = '/request/temp/prizemlje';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trenTempPrizemlje = document.querySelector("#prizemlje-temp")
            trenTempPrizemlje.innerHTML = this.responseText;
        }
    }
    xhr.send();
}

function runPrviSprat() {
    var xhr = new XMLHttpRequest();
    var url = '/request/temp/prvi-sprat';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trenTempPrviSprat = document.querySelector("#trenutna-temperatura-prvi-sprat")
            trenTempPrviSprat.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runSpoljasnja() {
    var xhr = new XMLHttpRequest();
    var url = '/request/temp/spoljasnja';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trenTempSpolja = document.querySelector("#spoljasnja-temp")
            trenTempSpolja.innerHTML = this.responseText
        }
    }
    xhr.send();
}
runPrizemlje()
runPrviSprat()
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
        }
    }
    xhr.send();
}

function runVentilacijaProzor2() {
    var xhr = new XMLHttpRequest();
    var url = '/request/ventilacija/prozor2';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var prozor2 = document.querySelector("#prozor2-state")
            prozor2.innerHTML = this.responseText
        }
    }
    xhr.send();
}
runVentilacijaProzor1()
runVentilacijaProzor2()
setInterval(runVentilacijaProzor1, 3000)
setInterval(runVentilacijaProzor2, 3000)

function runSusaraTemp() {
    var xhr = new XMLHttpRequest();
    var url = '/request/temp/susara';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var temp = document.querySelector("#susara-temp")
            temp.innerHTML = this.responseText
        }
    }
    xhr.send();
}

function runSusaraHumidity() {
    var xhr = new XMLHttpRequest();
    var url = '/request/humidity/susara';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var humidity = document.querySelector("#susara-humidity")
            humidity.innerHTML = this.responseText
            console.log(this.responseText);
        }
    }
    xhr.send();
}
runSusaraHumidity()
runSusaraTemp()
setInterval(runSusaraHumidity, 10000)
setInterval(runSusaraTemp, 10000)