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
            ${name}: ${value}
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
                console("prizemlje")
            }
        }
        // Sending our request 
    xhr.send();
}
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
                trenTempPrviSprat.innerHTML = this.responseText
                zakazivanjeTempPrviSprat.innerHTML = this.responseText
                console("prvi sprat")
            }
        }
        // Sending our request 
    xhr.send();
}
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
                "floor": ${floor}
                "temp": ${temp}

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
            let startPrizemlje = document.querySelector("#startP").value
            let endPrizemlje = document.querySelector("#endP").value
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };
            let data = `{
            "floor": ${floor}
            "temp": ${temp}
            "Start Time Prizemlje": ${startPrizemlje}
            "End Time Prizemlje": ${endPrizemlje}
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
            "floor": ${floor}
            "temp": ${temp}
            "Start Time Prvi Sprat": ${startPrviSprat}
            "End Time Prvi Sprat": ${endPrviSprat}
            }`;
            console.log(data)
            xhr.send(data);
        }
    })
}
setInterval(runPrizemlje, 10000)
setInterval(runPrviSprat, 10000)
    //ventilacija