document.querySelector(".send-form").addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(document.getElementById('text-input').value);

    if (document.getElementById('frau').checked) {
        console.log("Frau");
    } else if (document.getElementById('herr').checked) {
        console.log("Herr");
    } else {
        console.log("Keine Angabe");
    }

    console.log(document.getElementById('name').value);
    
    console.log(document.getElementById('email').value);
});