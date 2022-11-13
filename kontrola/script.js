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
                '/kontrola/assets/up-arrow.png',
            )
            checkStatus = !checkStatus;

        } else if (!checkStatus) {
            navigation.classList.remove("slide")
            navigation.classList.add("reverse-slide")
            img.setAttribute(
                'src',
                '/kontrola/assets/down-arrow.png',
            );
            checkStatus = !checkStatus;
        }

    })
    let settingsWindow = ""
    const rasveta = document.querySelector("#rasveta").addEventListener('click', function(e) {
        settingsWindow = "rasveta"
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/kontrola/assets/down-arrow.png',
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
            '/kontrola/assets/down-arrow.png',
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
            //input
            //input prizemlje
        var trenutnaInputPrizemlje = document.querySelector("#trenutnaPrizemlje")
        var trenutnaPlusPrizemlje = document.querySelector("#trenutnaPlusPrizemlje")
        var trenutnaMinusPrizemlje = document.querySelector("#trenutnaMinusPrizemlje")
        var trenutnaChoicePrizemlje = document.querySelector("#trenutnaChoicePrizemlje")
        trenutnaPlusPrizemlje.addEventListener('click', function() {
            trenutnaInputPrizemlje.value++;
            if (trenutnaInputPrizemlje.value >= 40) {
                trenutnaPlusPrizemlje.disabled = true;
                alert('Vrednost ne moze biti veca od 40')
            }
            trenutnaInputPrizemlje.innerHTML = trenutnaInputPrizemlje.value
            trenutnaChoicePrizemlje.classList.remove('display')
            trenutnaChoicePrizemlje.classList.add('choice-an')
        })
        trenutnaMinusPrizemlje.addEventListener('click', function() {
            trenutnaInputPrizemlje.value--;
            if (trenutnaInputPrizemlje.value <= -10) {
                trenutnaMinusPrizemlje.disabled = true;
                alert('Vrednost ne moze biti manja od -10')
            }
            trenutnaInputPrizemlje.innerHTML = trenutnaInputPrizemlje.value

            trenutnaChoicePrizemlje.classList.remove('display')
            trenutnaChoicePrizemlje.classList.add('choice-an')

        })
        trenutnaInputPrizemlje.addEventListener('input', function() {
            if (trenutnaInputPrizemlje.value >= 40) {
                trenutnaPlusPrizemlje.disabled = true;
                trenutnaInputPrizemlje.value = 40;
                //ovde se salju podaci za prizemlje
                alert('Vrednost ne moze biti veca od 40')
            } else if (trenutnaInputPrizemlje.value <= -10) {
                trenutnaMinusPrizemlje.disabled = true;
                trenutnaInputPrizemlje.value = -10
                alert('Vrednost ne moze biti manja od -10')
            }
            if (trenutnaInputPrizemlje.value == '') {
                trenutnaChoicePrizemlje.classList.add('display')
                trenutnaChoicePrizemlje.classList.remove('choice-an')
            } else {
                trenutnaChoicePrizemlje.classList.remove('display')
                trenutnaChoicePrizemlje.classList.add('choice-an')
            }

        })
        var prihvatiPrizemlje = document.querySelector('#prihvati-prizemlje').addEventListener('click', function() {
            var trenFrontPrizemlje = document.querySelector('.trenutna-prizemlje-front')
            var trenBackPrizemlje = document.querySelector('.trenutna-prizemlje-back')
            trenFrontPrizemlje.style.border = "5px solid green"
            trenBackPrizemlje.style.border = "5px solid green"
            console.log("Zeljena temperatura prizemlja je: ", trenutnaInputPrizemlje.value)
        })
        var ponistiPrizemlje = document.querySelector('#ponisti-prizemlje').addEventListener('click', function() {
                var trenFrontPrizemlje = document.querySelector('.trenutna-prizemlje-front')
                var trenBackPrizemlje = document.querySelector('.trenutna-prizemlje-back')
                trenFrontPrizemlje.style.border = "5px solid transparent"
                trenBackPrizemlje.style.border = "5px solid transparent"
                trenutnaInputPrizemlje.value = ""
                trenutnaChoicePrizemlje.classList.add('display')
                trenutnaChoicePrizemlje.classList.remove('choice-an')
                console.log("Ponisteno")
            })
            //input prvi sprat
        var trenutnaInputPrviSprat = document.querySelector("#trenutnaPrviSprat")
        var trenutnaPlusPrviSprat = document.querySelector("#trenutnaPlusPrviSprat")
        var trenutnaMinusPrviSprat = document.querySelector("#trenutnaMinusPrviSprat")
        var trenutnaChoicePrviSprat = document.querySelector("#trenutnaChoicePrviSprat")
        trenutnaPlusPrviSprat.addEventListener('click', function() {
            trenutnaInputPrviSprat.value++;
            if (trenutnaInputPrviSprat.value >= 40) {
                trenutnaPlusPrviSprat.disabled = true;
                alert('Vrednost ne moze biti veca od 40')
            }
            trenutnaInputPrviSprat.innerHTML = trenutnaInputPrviSprat.value
            trenutnaChoicePrviSprat.classList.remove('display')
            trenutnaChoicePrviSprat.classList.add('choice-an')
        })
        trenutnaMinusPrviSprat.addEventListener('click', function() {
            trenutnaInputPrviSprat.value--;
            if (trenutnaInputPrviSprat.value <= -10) {
                trenutnaMinusPrviSprat.disabled = true;
                alert('Vrednost ne moze biti manja od -10')
            }
            trenutnaInputPrviSprat.innerHTML = trenutnaInputPrviSprat.value
            trenutnaChoicePrviSprat.classList.remove('display')
            trenutnaChoicePrviSprat.classList.add('choice-an')
        })
        trenutnaInputPrviSprat.addEventListener('input', function() {
            if (trenutnaInputPrviSprat.value >= 40) {
                trenutnaPlusPrviSprat.disabled = true;
                trenutnaInputPrviSprat.value = 40;
                //ovde se salju podaci za prvi sprat
                alert('Vrednost ne moze biti veca od 40')
            } else if (trenutnaInputPrviSprat.value <= -10) {
                trenutnaMinusPrviSprat.disabled = true;
                trenutnaInputPrviSprat.value = -10
                alert('Vrednost ne moze biti manja od -10')
            }
            if (trenutnaInputPrviSprat.value == '') {
                trenutnaChoicePrviSprat.classList.add('display')
                trenutnaChoicePrviSprat.classList.remove('choice-an')
            } else {
                trenutnaChoicePrviSprat.classList.remove('display')
                trenutnaChoicePrviSprat.classList.add('choice-an')
            }
        })
        var prihvatiPrviSprat = document.querySelector('#prihvati-prvi-sprat').addEventListener('click', function() {
            var trenFrontPrviSprat = document.querySelector('.trenutna-prvi-sprat-front')
            var trenBackPrviSprat = document.querySelector('.trenutna-prvi-sprat-back')
            trenFrontPrviSprat.style.border = "5px solid green"
            trenBackPrviSprat.style.border = "5px solid green"
            console.log("Zeljena temperatura prvog sprata je:", trenutnaInputPrviSprat.value)
        })
        var ponistiPrviSprat = document.querySelector('#ponisti-prvi-sprat').addEventListener('click', function() {
            var trenFrontPrviSprat = document.querySelector('.trenutna-prvi-sprat-front')
            var trenBackPrviSprat = document.querySelector('.trenutna-prvi-sprat-back')
            trenFrontPrviSprat.style.border = "5px solid transparent"
            trenBackPrviSprat.style.border = "5px solid transparent"
            trenutnaInputPrviSprat.value = ""
            trenutnaChoicePrviSprat.classList.add('display')
            trenutnaChoicePrviSprat.classList.remove('choice-an')
            console.log("Ponisteno")
        })
        checkStatus = !checkStatus;
    })
    const susara = document.querySelector("#susara").addEventListener('click', function(e) {
            var navigation = document.querySelector("nav")
            var img = document.querySelector("#image")
            navigation.classList.remove("slide")
            navigation.classList.add("reverse-slide")
            img.setAttribute(
                'src',
                '/kontrola/assets/down-arrow.png',
            );
            checkStatus = !checkStatus;
        })
        //input or change
    const dnevnaSobaSlide = document.querySelector("#dnevna-soba-slide").addEventListener("input", function(e) {
        var dnevnaSoba = document.querySelector("#dnevna-soba")
        dnevnaSoba.innerHTML = this.value + '%'
    })
    const kupatiloSlide = document.querySelector("#kupatilo-slide").addEventListener("input", function(e) {
        var kupatilo = document.querySelector("#kupatilo")
        kupatilo.innerHTML = this.value + '%'
    })
    const hodnikSlide = document.querySelector("#hodnik-slide").addEventListener("input", function(e) {
        var hodnik = document.querySelector("#hodnik")
        hodnik.innerHTML = this.value + '%'
    })
    const stepeniceSlide = document.querySelector("#stepenice-slide").addEventListener("input", function(e) {
        var stepenice = document.querySelector("#stepenice")
        stepenice.innerHTML = this.value + '%'
    })
    const soba1Slide = document.querySelector("#soba1-slide").addEventListener("input", function(e) {
        var soba1 = document.querySelector("#soba1")
        soba1.innerHTML = this.value + '%'
    })
    const soba2Slide = document.querySelector("#soba2-slide").addEventListener("input", function(e) {
        var soba2 = document.querySelector("#soba2")
        soba2.innerHTML = this.value + '%'
    })