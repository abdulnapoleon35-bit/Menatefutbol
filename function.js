let submit = document.getElementById('submit');


submit.addEventListener ('click', function(){

    let year = document.getElementById('year').value;
    let yearp = document.getElementById('yearp');

    yearp.textContent = "" + year + " Menate Associaton Cup";
});

let slots = document.querySelectorAll(".slot");
let buttons = document.querySelectorAll(".team");

let index = 0;

buttons.forEach(function(btn){

    btn.addEventListener("click", function() {

        let text = btn.dataset.text;

        if (index < slots.length) {

            slots[index].innerText = text;
            index++;
        }

        
    });

});



