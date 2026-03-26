//let submit = document.getElementById('submit');

let rounds = document.querySelectorAll(".round");

let roundtext = document.querySelector(".roundtext");

rounds.forEach(function(rnd) {

    rnd.addEventListener("click", function() {

        let roundwhat = rnd.dataset.text;

        roundtext.innerText = roundwhat;


    });
});


//submit.addEventListener ('click', function(){

    //let year = document.getElementById('year').value;
    //let yearp = document.getElementById('yearp');

    //yearp.textContent = "*" + year + " Menate Associaton Cup*";
//});

let slots = document.querySelectorAll(".slot");
let buttons = document.querySelectorAll(".team");

let index = 0;

buttons.forEach(function(btn){

    btn.addEventListener("click", function() {

        let text1 = btn.dataset.text1;
        let text2 = btn.dataset.text2;
        let text = btn.dataset.text;

        let two = [3, 7, 11]
        let num = [1,2,4,5]

        if (index < slots.length) {

            if (two.includes(index)) {

                 slots[index].innerText = text2;
                 index++;

            } else if (num.includes(index)) { 

                 slots[index].innerText = text;
                 index++;

            } else {

                slots[index].innerText = text1;
                 index++;
            }

            
        }

        
    });

});



