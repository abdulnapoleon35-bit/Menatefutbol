let team = document.querySelectorAll(".team");
let position = document.querySelectorAll(".position");
let undo = document.getElementById("undo");

let index = 0;

team.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let text = btn.dataset.text2;
        let num = btn.dataset.text;
        
        let list1 = []
        let list2 = []
        
        for (i=1;i< 100; i += 3) {
            list1.push(i);
        }

        for (x=2;x<100;x += 3) {
            list2.push(x);
        }

        

        if (index < position.length) {

          if (index <= 35) {

            if (list1.includes(index)) {

                position[index].innerText = " - " + num;
                index ++;
               

            } else if (list2.includes(index)) {

                position[index].innerText = num + "pts";
                index ++;
                

            } else {

                position[index].innerText = text;
                index ++;
                
            }

          }
 

          else if (index > 35) {

              

            if (list1.includes(index)) {

                position[index].innerText = " - " + num;
                index ++;
               

            } else if (list2.includes(index)) {

                position[index].innerText = num + "pts";
                index ++;
                

            } else {

                position[index].innerText = text;
                index++;
                
            }

            } 

        }
    });
});

undo.addEventListener("click", function() {

    index--;
    position[index].innerHTML = "";
});

    
