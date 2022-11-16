    let checkStatus = true;
    var navigation = document.querySelector("nav")
    var img = document.querySelector("#image")
    var rasvetaBox = document.querySelector("#rasveta-box")
    var grejanjeBox = document.querySelector("#grejanje-box")
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
    let settingsWindow = ""
        //rasveta
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

            var input = document.querySelectorAll('input[type ="range"]');
            for (var i = 0; i < input.length; i++) {
                input[i].addEventListener("change", function(e) {
                    var paragraph = this.parentElement.previousElementSibling
                    paragraph.innerHTML = this.value + "%"
                })
            }
            checkStatus = !checkStatus;

        })
        //grejanje
    const grejanje = document.querySelector("#grejanje").addEventListener('click', function(e) {
            settingsWindow = "grejanje"
            navigation.classList.remove("slide")
            navigation.classList.add("reverse-slide")
            img.setAttribute(
                'src',
                '/assets/kontrola/down-arrow.png',
            );
            grejanjeBox.classList.remove("display")
            rasvetaBox.classList.add("display")
            var dropdownnButton = document.querySelector("#drpdwn-btn")
            dropdownnButton.addEventListener('click', function(e) {
                if (checkStatus && settingsWindow == "grejanje") {
                    grejanjeBox.classList.remove("display")
                } else {
                    grejanjeBox.classList.add("display")
                }
            })
            var minus = document.querySelectorAll(".minus");
            for (var i = 0; i < minus.length; i++) {
                minus[i].addEventListener("click", function(e) {
                    var input = this.nextElementSibling.firstElementChild
                    var choice = this.parentElement.nextElementSibling

                    if (input.value <= 10) {
                        input.value = 10;
                        alert('Vrednost ne moze biti manja od 10')
                    } else {
                        input.value--;
                    }
                    choice.classList.remove('display')
                    choice.classList.add('choice-an')
                })
            }
            var plus = document.querySelectorAll(".plus");
            for (var i = 0; i < plus.length; i++) {
                plus[i].addEventListener("click", function(e) {
                    var input = this.previousElementSibling.firstElementChild
                    var choice = this.parentElement.nextElementSibling

                    if (input.value >= 40) {
                        alert('Vrednost ne moze biti veca od 40')
                        input.value = 40;
                    } else {
                        input.value++;
                    }
                    choice.classList.remove('display')
                    choice.classList.add('choice-an')
                })
            }
            var prihvati = document.querySelectorAll(".prihvati");
            for (var i = 0; i < prihvati.length; i++) {
                prihvati[i].addEventListener("click", function(e) {
                    var front = this.parentElement.parentElement.previousElementSibling
                    var back = this.parentElement.parentElement
                    var input = this.parentElement.previousElementSibling.children[1].firstElementChild
                    front.style.border = "5px solid green";
                    back.style.border = "5px solid green";
                    console.log("Zeljena temperatura prizemlja je: ", input.value);
                })
            }
            var ponisti = document.querySelectorAll(".ponisti");
            for (var i = 0; i < prihvati.length; i++) {
                ponisti[i].addEventListener("click", function(e) {
                    var front = this.parentElement.parentElement.previousElementSibling
                    var back = this.parentElement.parentElement
                    var input = this.parentElement.previousElementSibling.children[1].firstElementChild
                    var choice = this.parentElement
                    front.style.border = "5px solid transparent"
                    back.style.border = "5px solid transparent"
                    choice.classList.add('display')
                    choice.classList.remove('choice-an')
                        // input.value = trenTemp tog sprata
                        // start value = trenTemp tog sprata
                    console.log("Ponistena temperatura prizemlje")
                })
            }
            var period = document.querySelectorAll(".period");
            for (var i = 0; i < period.length; i++) {
                period[i].addEventListener("click", function(e) {
                    var input = this.nextElementSibling
                    var periodInputPrizemlje = this.parentElement.parentElement.parentElement.parentElement.parentElement.children[2]
                    console.log(periodInputPrizemlje)
                    input.classList.remove('display')
                    periodInputPrizemlje.classList.remove('display')
                })
            }

        })
        //ventilacija
    const ventilacija = document.querySelector("#ventilacija").addEventListener('click', function(e) {
            settingsWindow = "ventilacija"
            navigation.classList.remove("slide")
            navigation.classList.add("reverse-slide")
            img.setAttribute(
                'src',
                '/assets/kontrola/down-arrow.png',
            );
            checkStatus = !checkStatus;
        })
        //susara
    const susara = document.querySelector("#susara").addEventListener('click', function(e) {
        settingsWindow = "susara"
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/assets/kontrola/down-arrow.png',
        );
        checkStatus = !checkStatus;
    })