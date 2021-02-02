$(document).ready(function() {
 
    let objects = $(".objects");
    let room = $(".room");
    let bed = [$("#bed1"), $("#bed2")]
    let x;
    let y;
    $(bed).draggable();
    $(".seating").draggable();
    $(room).droppable({
  
      drop: function(event, ui){
        $(room).addClass("highlight")
        if(ui.draggable.attr("id") == "bed1") {
          
          x = 1;
          console.log("bed" + x);
      } else if(ui.draggable.attr("id") == "bed2") {
        
        x = 2;
        console.log("bed" + x);
    }
    
    if(ui.draggable.attr("id") == "seating1") {
      
      y = 1;
      console.log("seating" + y);
  }else if(ui.draggable.attr("id") == "seating2") {
      //everytime something is dragged push it to an array, then check if array has a and b then assign the array to a variable of client
    y = 2;
    console.log("seating" + y);
}
//function where object is dragged and id is grabbed snd assigned to var, 
//2 arrays, one is all possible element, another is element i dropped, and different combination fo array is assigned to dif people
//let picking =[]
//let chair = ui.draggable.attr("id") picking.push(chair) wrap this in a funciton
//if picking = [a ,b, c]
//dfsjdfl.HTML (room is selected by kae)
 if (x == 1 && y == 1){
    console.log("yes");
    $(".room span").replaceWith("<span>Jake booked the room!</span>");

  } else {
    console.log("no");
    $(".room span").replaceWith("<span>Katie booked the room!</span>");
  }
  
      },


      out: function(event, ui){
        $(room).removeClass("highlight")
        x = 0;
      }
    });



})
