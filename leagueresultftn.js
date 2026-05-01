let team = document.querySelectorAll(".team");
let position = document.querySelectorAll(".position");
let undo = document.getElementById("undo");

let index = 0;

team.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let text1 = btn.dataset.text1;
        let text2 = btn.dataset.text2;
        let num = btn.dataset.text;
        
        let list1 = [];
        let list2 = [];
        let list3 = [];
        
        for (i=0;i< 100; i += 4) {
            list1.push(i);
        }

        for (x=3;x<100;x += 4) {
            list2.push(x);
        }

        for (i=1;i<100;i+=4) {
            list3.push(i);
        }

        

        if (index < position.length) {

            if (list1.includes(index)) {

                position[index].innerText = text1;
                index++;
            }

            else if (list2.includes(index)) {

                position[index].innerText = text2;
                index++;
            }

            else if (list3.includes(index)) {

                position[index].innerText = num + "-";
                index++;
            }

            else {

                position[index].innerText = num;
                index++;
            }


        }
    });
});

undo.addEventListener("click", function() {

    index--;
    position[index].innerHTML = "";
});

    
