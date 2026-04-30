let zone = document.querySelectorAll("zone");
let zonetext = document.querySelectorAll("zonetext");

zone.forEach(function(zn) {

  zn.addEventListener("click", function() {

    let zoneh = zn.dataset.text;

    

      
  });
});

let team = document.querySelectorAll(".team");
let position = document.querySelectorAll(".position")

let index = 0;
let standw = 1;
let stande = 1;

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

                position[index].innerText = standw + "." + text;
                index ++;
                standw ++;
                
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

                position[index].innerText = stande + "." + text;
                index ++;
                stande ++;
                
            }

            } 

        }



            

        



    });
});

    
