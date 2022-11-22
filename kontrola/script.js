function run() {
    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    var url = '/request/temp/prizemlje';
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        }
        // Sending our request 
    xhr.send();
}
run();

// var input = document.querySelectorAll('input[type ="range"]');
// for (var i = 0; i < input.length; i++) {
//     input[i].addEventListener("change", function(e) {
//         console.log(this.value)
//     })
// }

let xhr = new XMLHttpRequest();
xhr.open("POST", "/kontrola/dnevna-soba");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
};

let data = `{
  "Id": 78912
}`;

xhr.send(data);