function checkGender(firstName){
   if(firstName.length > 0){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
         if (this.readyState == 4 && this.status == 200){
            if(document.querySelector("div.container > div.results > svg.active")){
               document.querySelector("div.container > div.results > svg.active").classList.remove("active");
            }
            document.querySelector("div.container > div.results > p").innerHTML = "";
            var response = JSON.parse(this.responseText);
            if(firstName == document.querySelector("div.container > input").value){
               if(response.gender){
                  document.querySelector("div.container > div.results > svg." + response.gender).classList.add("active");
                  document.querySelector("div.container > div.results > p").innerHTML = response.gender + ", with " + Math.floor(response.probability * 100) + "% accuracy";
               }else{
                  document.querySelector("div.container > div.results > p").innerHTML = "no gender found";
               }
            }
         }
      };
      xhttp.open("GET", "https://api.genderize.io/?name=" + firstName, true);
      xhttp.send();
   }else{
      if(document.querySelector("div.container > div.results > svg.active")){
         document.querySelector("div.container > div.results > svg.active").classList.remove("active");
      }
      document.querySelector("div.container > div.results > p").innerHTML = "";
   }
}