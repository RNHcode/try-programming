
        function saklar() {
            let toggle = document.getElementById("default-toggle");
            let toggle2 = document.getElementById("default-toggle2");
            let toggle3 = document.getElementById("default-toggle3");
            // console.log('testing', toggle.checked);
            let lampu1 = document.getElementById("lampu1");
            let lampu2 = document.getElementById("lampu2");
            let lampu3 = document.getElementById("lampu3");
            console.log('testing', toggle.checked);
            if (toggle.checked){
                lampu1.src = "images/on.gif";
           
               }else {
                lampu1.src = "images/off.gif";
               
            }
            if (toggle2.checked){
                lampu2.src = "images/on.gif";
           
               }else {
                lampu2.src = "images/off.gif";
               
            }
            if (toggle3.checked){
                lampu3.src = "images/on.gif";
           
               }else {
                lampu3.src = "images/off.gif";
               
            }
        }
            // console.log('testing saklarnya...');
            // let lampu1 = document.getElementById("lampu1");
            // console.info(lampu1.src);
            // lampu1.src = 'images/on.gif'
    