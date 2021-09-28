
        function openPage(pageName, elmnt, color) {
            var i, tabcontent, tablink ;
    
            tabcontent = document.getElementsByClassName("tabcontent");
            for(i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = 'none';
            }
    
            tablink = document.getElementsByClassName("tablink");
            for(i = 0; i < tablink.length; i++) {
              tablink[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            elmnt.style.backgroundColor = color;
          }    