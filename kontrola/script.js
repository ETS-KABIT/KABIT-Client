// RASVETA
var inputR = document.querySelectorAll('input[type ="range"]');
for (var i = 0; i < inputR.length; i++) {
    inputR[i].addEventListener("change", function(e) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/kontrola/rasveta");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        let name = this.id
        let value = this.value
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        let data = `{
            "name": "${name}",
            "value": ${value}
        }`;
        console.log(data)
        xhr.send(data);
    })
}
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
                var trenTempPrizemlje = document.querySelector("#trenutna-temperatura-prizemlje")
                var zakazivanjeTempPrizemlje = document.querySelector("#zakazivanje-temperatura-prizemlje")
                trenTempPrizemlje.innerHTML = this.responseText
                zakazivanjeTempPrizemlje.innerHTML = this.responseText
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

    // function execute after request is successful 
    xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var trenTempPrviSprat = document.querySelector("#trenutna-temperatura-prvi-sprat")
                var zakazivanjeTempPrviSprat = document.querySelector("#zakazivanje-temperatura-prvi-sprat")
                trenTempPrviSprat.innerHTML = this.responseText, "°C"
                zakazivanjeTempPrviSprat.innerHTML = this.responseText, "°C"
            }
        }
        // Sending our request 
    xhr.send();
}
runPrviSprat()
setInterval(runPrizemlje, 10000)
setInterval(runPrviSprat, 10000)
    ////GREJANJE tren 
var prihvati = document.querySelectorAll(".prihvati");
for (var i = 0; i < prihvati.length; i++) {
    prihvati[i].addEventListener("click", function(e) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/kontrola/trenutna");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        let floor = this.parentElement.previousElementSibling.children[1].name
        let temp = this.parentElement.previousElementSibling.children[1].value
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        let data = `{
                "floor": "${floor}",
                "temp": "${temp}"

            }`;
        console.log(data)
        xhr.send(data);
    })
}
var poinsti = document.querySelectorAll(".ponisti");
for (var i = 0; i < poinsti.length; i++) {
    poinsti[i].addEventListener("click", function(e) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/kontrola/trenutna");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        let floor = this.parentElement.previousElementSibling.children[1].name
        let temp = 0
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        let data = `{
                "floor": "${floor}",
                "temp": "${temp}"

            }`;
        console.log(data)
        xhr.send(data);
    })
}
////GREJANJE  zakazivanje  
var primeniZ = document.querySelectorAll(".primeniZ");
for (var i = 0; i < primeniZ.length; i++) {
    primeniZ[i].addEventListener("click", function(e) {
        if (this.value == "prizemlje") {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/kontrola/zakazivanje");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            let floor = "prizemlje"
            let temp = this.parentElement.previousElementSibling.children[1].value
            let rawStartPrizemlje = document.querySelector("#startP").value
            const startPrizemlje = +new Date(rawStartPrizemlje)
            let rawEndPrizemlje = document.querySelector("#endP").value
            const endPrizemlje = +new Date(rawEndPrizemlje)
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };
            let data = `{
            "floor": "${floor}",
            "temp": "${temp}",
            "Start Time Prizemlje": "${startPrizemlje}",
            "End Time Prizemlje": "${endPrizemlje}"
            }`;
            console.log(data)
            xhr.send(data);
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/kontrola/dnevna-soba");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            let floor = "Prvi sprat"
            let temp = this.parentElement.previousElementSibling.children[1].value
            let rawStartPrviSprat = document.querySelector("#startPS").value
            const startPrviSprat = +new Date(rawStartPrviSprat)
            let rawEndPrviSprat = document.querySelector("#endPS").value
            const endPrviSprat = +new Date(rawEndPrviSprat)
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };
            let data = `{
            "floor": "${floor}",
            "temp": "${temp}",
            "Start Time Prvi Sprat": "${startPrviSprat.unix()}",
            "End Time Prvi Sprat": "${endPrviSprat.unix()}",
            }`;
            console.log(data)
            xhr.send(data);
        }
    })
}
var ponistiZ = document.querySelectorAll(".ponistiZ");
for (var i = 0; i < ponistiZ.length; i++) {
    ponistiZ[i].addEventListener("click", function(e) {
        if (this.value == "prizemlje") {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/kontrola/zakazivanje");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            let floor = "prizemlje"
            let temp = 0
            let startPrizemlje = ""
            let endPrizemlje = ""
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };
            let data = `{
            "floor": "${floor}",
            "temp": "${temp}",
            "Start Time Prizemlje": "${startPrizemlje}",
            "End Time Prizemlje": "${endPrizemlje}"
            }`;
            console.log(data)
            xhr.send(data);
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/kontrola/dnevna-soba");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            let floor = "Prvi sprat"
            let temp = this.parentElement.previousElementSibling.children[1].value
            let startPrviSprat = document.querySelector("#startPS").value
            let endPrviSprat = document.querySelector("#endPS").value
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };
            let data = `{
            "floor": "${floor}",
            "temp": "${temp}",
            "Start Time Prvi Sprat": "${startPrviSprat}",
            "End Time Prvi Sprat": "${endPrviSprat}",
            }`;
            console.log(data)
            xhr.send(data);
        }
    })
}

//ventilacija
var ventilacijaa = document.querySelectorAll('input[type ="checkbox"]')
for (var i = 0; i < ventilacijaa.length; i++) {
    ventilacijaa[i].addEventListener("click", function(e) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/kontrola/prozori");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        let window = this.id
        let rawState = this.checked

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        if (rawState) {
            var state = 1
        } else {
            var state = 0
        }
        let data = `{
                "window": "${window}",
                "state": "${state}"

            }`;
        console.log(data)
        xhr.send(data);
    })
}