const kontrolaBtn = document.querySelector("#kontrola").addEventListener('click' , function(e){
    //da li treba login ili ne
    if(true){
        var prijavaWindow = document.querySelector('.prijava-window')
        var header = document.querySelector('header')
        var section = document.querySelector('section')
        var body = document.querySelector('body')

        prijavaWindow.classList.remove("display-none");
        prijavaWindow.classList.add("animation3");

        header.classList.add("opacity");
        section.classList.add("opacity");
        body.classList.add("bcg-clr");
    }
})
