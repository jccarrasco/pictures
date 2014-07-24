var change_button = document.getElementById("change_button");

change_button.onclick = function(){
  // When clicked initialize a picture web activity
  	var pickImageActivity = new MozActivity({
     name: "pick",
     data: {
            type: ["image/png", "image/jpg", "image/jpeg"]
           }
     });
  
  	pickImageActivity.onsuccess = function() {
      var new_img = document.createElement('img'); // create a new img element
      new_img.src =window.URL.createObjectURL(this.result.blob);
      
      // Show image in app
      var img_holder = document.querySelector("image_holder");
      image_holder.appendChild(new_img);
    };
    
    pickImageActivity.onerror = function() {
     alert("Cannot upload photo!");
    };
}

var remove_button = document.getElementById("remove_button");

remove_button.onclick = function(){
  var image_holder = document.getElementById("image_holder");
  
  while(image_holder.firstChild){
    image_holder.removeChild(image_holder.firstChild);
  }
  
}


var remove_first = document.getElementById("remove_first");

remove_first.onclick = function(){
  var image_holder = document.getElementById("image_holder");
  
  if(image_holder.firstChild){
    image_holder.removeChild(image_holder.firstChild);
  }
  
}


var remove_last = document.getElementById("remove_last");

remove_last.onclick = function(){
  var image_holder = document.getElementById("image_holder");
  
  if(image_holder.lastChild){
    image_holder.removeChild(image_holder.lastChild);
  }
  
}