    let checkStatus = true;
        const dropdownnButton = document.querySelector("#drpdwn-btn").addEventListener('click', function(e) {
            var navigation = document.querySelector("nav")
            var img = document.querySelector("#image")
            if(checkStatus)
            {   
                navigation.classList.remove("reverse-slide")
                navigation.classList.add("slide")
                img.setAttribute(
                    'src',
                    '/kontrola/assets/up-arrow.png',
                )
                checkStatus = !checkStatus;

            }
            else if(!checkStatus)
            {
                navigation.classList.remove("slide")
                navigation.classList.add("reverse-slide")
                img.setAttribute(
                    'src',
                    '/kontrola/assets/down-arrow.png',
                );
                checkStatus = !checkStatus;
            }


    })
    const rasveta = document.querySelector("#rasveta").addEventListener('click', function(e) {
        var navigation = document.querySelector("nav")
        var img = document.querySelector("#image")
        console.log(this)
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/kontrola/assets/down-arrow.png',
        );
        checkStatus = !checkStatus;    
    })
    const grejanje = document.querySelector("#grejanje").addEventListener('click', function(e) {
        var navigation = document.querySelector("nav")
        var img = document.querySelector("#image")
        console.log(this)
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/kontrola/assets/down-arrow.png',
        );
        checkStatus = !checkStatus;
    })
    const susara = document.querySelector("#susara").addEventListener('click', function(e) {
        var navigation = document.querySelector("nav")
        var img = document.querySelector("#image")
        console.log(this)
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/kontrola/assets/down-arrow.png',
        );
        checkStatus = !checkStatus;
    })