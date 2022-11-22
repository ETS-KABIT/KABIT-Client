    let checkStatus = true;
    var navigation = document.querySelector("nav")
    var img = document.querySelector("#image")
    var rasvetaBox = document.querySelector("#rasveta-box")
    var grejanjeBox = document.querySelector("#grejanje-box")
    var ventilacijaBox = document.querySelector("#ventilacija-box")
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
                    var form = this.parentElement
                        // console.log(form)
                    paragraph.innerHTML = this.value + "%"
                        // form.submit()
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
                    var form = input.parentElement
                    console.log(form)
                    form.submit()
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
            //zakazivanje
            var period = document.querySelectorAll(".period");
            for (var i = 0; i < period.length; i++) {
                period[i].addEventListener("click", function(e) {
                    var backCover = this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling
                    if (this.value == "prizemlje") {
                        var boxPrizemlje = this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
                        boxPrizemlje.classList.remove('display')
                        backCover.classList.remove('display')
                    } else {
                        var boxPrviSprat = this.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
                        boxPrviSprat.classList.remove('display')
                        backCover.classList.remove('display')
                    }
                })
            }
            var primeniPeriod = document.querySelectorAll(".primeni-period");
            for (var i = 0; i < primeniPeriod.length; i++) {
                primeniPeriod[i].addEventListener("click", function(e) {
                    var inputStart = this.previousElementSibling.firstElementChild.children[1].value
                    var inputEnd = this.previousElementSibling.firstElementChild.nextElementSibling.children[1].value
                    var inputTempPrizemlje = document.querySelector("#zakazivanjePrizemlja")
                    var inputTempPrviSprat = document.querySelector("#zakazivanjePrviSprat")
                    var boxPeriod = this.parentElement
                    const timeDate = new Date().toJSON();
                    var ineerPrviSprat = document.querySelector("#zakazivanje-temperatura-prvi-sprat").parentElement.parentElement
                    var ineerPrizemlje = document.querySelector("#zakazivanje-temperatura-prizemlje").parentElement.parentElement

                    if (this.value == "prizemlje") {
                        ineerPrizemlje.classList.add("active")
                        if (inputStart <= timeDate || inputEnd <= inputStart) {
                            alert("Pogresan unos")
                            ineerPrviSprat.classList.remove("active")
                            ineerPrizemlje.classList.add("active")
                        } else {
                            ineerPrviSprat.classList.remove("active")
                            ineerPrizemlje.classList.add("active")
                            console.log("poslato prizemlje period")
                            inputTempPrizemlje.classList.remove("display")
                            boxPeriod.classList.add("display")
                            this.parentElement.previousElementSibling.classList.add("display")
                        }
                    } else {
                        ineerPrviSprat.classList.add("active")
                        if (inputStart <= timeDate || inputEnd <= inputStart) {
                            alert("Pogresan unos")
                            ineerPrviSprat.classList.add("active")
                            ineerPrizemlje.classList.remove("active")
                        } else {
                            ineerPrviSprat.classList.add("active")
                            ineerPrizemlje.classList.remove("active")
                            console.log("poslato prvi sprat period")
                            inputTempPrviSprat.classList.remove("display")
                            boxPeriod.classList.add("display")
                            this.parentElement.previousElementSibling.previousElementSibling.classList.add("display")
                        }
                    }
                })
            }
            var cencel = document.querySelectorAll(".cencel");
            for (var i = 0; i < cencel.length; i++) {
                cencel[i].addEventListener("click", function(e) {
                    var ineerPrviSprat = document.querySelector("#zakazivanje-temperatura-prvi-sprat").parentElement.parentElement
                    var ineerPrizemlje = document.querySelector("#zakazivanje-temperatura-prizemlje").parentElement.parentElement

                    if (this.value == "prizemlje") {
                        var boxPrizemlje = this.parentElement
                        var backCover = this.parentElement.previousElementSibling
                        boxPrizemlje.classList.add('display')
                        backCover.classList.add('display')
                        ineerPrizemlje.classList.remove("active")
                    } else {
                        var boxPrviSprat = this.parentElement;
                        var backCover = this.parentElement.previousElementSibling.previousElementSibling
                        boxPrviSprat.classList.add('display')
                        backCover.classList.add('display')
                        ineerPrviSprat.classList.remove("active")

                    }
                })
            }
            var prihvatiZ = document.querySelectorAll(".primeniZ");
            for (var i = 0; i < prihvatiZ.length; i++) {
                prihvatiZ[i].addEventListener("click", function(e) {
                    if (this.value == "prizemlje") {
                        var ineerPrizemlje = document.querySelector("#zakazivanje-temperatura-prizemlje").parentElement.parentElement
                        ineerPrizemlje.classList.remove("active")
                        var formTempPrizemlje = document.querySelector("#zakazivanjePrizemljaTemp").parentElement
                        var formPeriodPrizemlje = document.querySelector("#startP").parentElement.parentElement
                        console.log(formTempPrizemlje)
                        console.log(formPeriodPrizemlje)
                        formTempPrizemlje.submit()
                        formPeriodPrizemlje.submit()
                    } else {
                        var ineerPrviSprat = document.querySelector("#zakazivanje-temperatura-prvi-sprat").parentElement.parentElement
                        ineerPrviSprat.classList.remove("active")
                        var formTempPrviSprat = document.querySelector("#zakazivanjePrviSpratTemp").parentElement
                        var formPeriodPrviSprat = document.querySelector("#startPS").parentElement.parentElement
                        console.log(formTempPrviSprat)
                        console.log(formPeriodPrviSprat)
                        formTempPrviSprat.submit()
                        formPeriodPrviSprat.submit()
                    }
                })
            }
            var ponistiZ = document.querySelectorAll(".ponistiZ");
            for (var i = 0; i < prihvati.length; i++) {
                ponistiZ[i].addEventListener("click", function(e) {
                    var inputStartPrizemlje = document.querySelector("#startP")
                    var inputEndPrizemlje = document.querySelector("#endP")
                    var inputStartPrviSprat = document.querySelector("#startPS")
                    var inputEndPrviSprat = document.querySelector("#endPS")
                    var inputTemp = this.parentElement.previousElementSibling.children[1].firstElementChild
                    if (this.value == "prizemlje") {
                        inputStartPrizemlje.value = ""
                        inputEndPrizemlje.value = ""
                        inputTemp.value = 10

                    } else {
                        inputStartPrviSprat.value = ""
                        inputEndPrviSprat.value = ""
                        inputTemp.value = 10
                    }
                })
            }
            checkStatus = !checkStatus;
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

        var dropdownnButton = document.querySelector("#drpdwn-btn")
        rasvetaBox.classList.add("display")
        grejanjeBox.classList.add("display")
        ventilacijaBox.classList.remove("display")
        dropdownnButton.addEventListener('click', function(e) {
            if (checkStatus == true && settingsWindow == "ventilacija") {
                ventilacijaBox.classList.remove("display")
            } else {
                ventilacijaBox.classList.add("display")
            }
        })
        var checkbox = document.querySelectorAll('input[type ="checkbox"]')
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].addEventListener("click", function(e) {
                console.log(this.checked)
                var stateParagraph = this.parentElement.parentElement.previousElementSibling
                var stateParagraphOutside = stateParagraph.parentElement.previousElementSibling.children[1]
                var form = stateParagraph.nextElementSibling
                console.log(form)
                if (this.checked == true) {
                    stateParagraph.innerHTML = "Otvoreno"
                    stateParagraphOutside.innerHTML = "Otvoreno"
                } else {
                    stateParagraph.innerHTML = "Zatvoreno"
                    stateParagraphOutside.innerHTML = "Zatvoreno"
                }
                form.submit()
            })
        }
    })