$(document).ready(function() {
    let inRoom = [];
    let objects = $(".objects");
    let room = $(".room");

    class Client {
        constructor(name, preferences){
            this.name=name;
            this.preferences=preferences;
        }
    }

    let KatiePre = ["bed1", "seating1", "shelf1"];
    let Katie = new Client ("Katie the Keeper", KatiePre);

    let PeterPre = ["bed2", "seating2", "shelf2"];
    let Peter = new Client ("Peter the Pilot", PeterPre);

    let MaggiePre = ["bed3", "seating3", "shelf3"];
    let Maggie = new Client ("Maggie the Magician", MaggiePre);

    let BobPre = ["bed1", "seating2", "shelf1"];
    let Bob = new Client ("Bob the Baker", BobPre);

    let LouisPre = ["bed2", "seating3", "shelf2"];
    let Louis = new Client ("Louis the Listener", LouisPre);

    let JakePre = ["bed3", "seating1", "shelf2"];
    let Jake = new Client ("Jake the Joker", JakePre);




    function noDup (data){
        return data.filter((value, index) => data.indexOf(value)===index);

    };

    $(objects).draggable({
        cursorAt: {top: 116,
                   right: 0}
    });

    $(room).droppable({
        drop: function(event, ui){
            $(room).addClass("highlight")
            let dragged = ui.draggable.attr("id");
            inRoom.push(dragged);
            master = noDup(inRoom);
            console.log(master);
        },
        out: function(event, ui){
            $(room).removeClass("highlight")
            let pulled = ui.draggable.attr("id");
            let index = inRoom.indexOf(pulled); 
            inRoom.splice(index, 1);
            master = noDup(inRoom);
            console.log(master);
        },
    });



$(".submitButton").click(function(){


    let array1 = master;
    console.log(array1);
    let array2 = Katie.preferences;
    let array3 = Peter.preferences;
    let array4 = Maggie.preferences;
    let array5 = Bob.preferences;
    let array6 = Louis.preferences;
    let array7 = Louis.preferences;



    array1.sort();
    array2.sort();
    array3.sort();
    array4.sort();
    array5.sort();
    array6.sort();
    array7.sort();

    let str1 = array1.toString();
    let str2 = array2.toString();
    let str3 = array3.toString();
    let str4 = array4.toString();
    let str5 = array5.toString();
    let str6 = array6.toString();
    let str7 = array7.toString();

    if (str1 == str2) {
        $(".introduction span").text(Katie.name + " booked the room!");
        console.log(Katie.name + " booked the room!");
    } else if(str1 == str3){
        $(".introduction span").text(Peter.name + " booked the room!");
        console.log(Peter.name + " booked the room!")
    } else if(str1 == str4){
        $(".introduction span").text(Maggie.name + " booked the room!");
        console.log(Maggie.name + " booked the room!")
    } else if(str1 == str5){
        $(".introduction span").text(Bob.name + " booked the room!");
        console.log(Bob.name + " booked the room!")
    } else if(str1 == str6){
        $(".introduction span").text(Louis.name + " booked the room!");
        console.log(Louis.name + " booked the room!")
    } else if(str1 == str7){
        $(".introduction span").text(Jake.name + " booked the room!");
        console.log(Jake.name + " booked the room!")

    } else if (master.length<3){
        $(".introduction span").text("Nobody" + " booked the room! The room dosn't have enough furniture.");
        console.log("Nobody" + " booked the room! The room dosn't have enough furniture.")
    } else if (master.length>3){
        $(".introduction span").text("Nobody" + " booked the room! The room is too crowded.");
        console.log("Nobody" + " booked the room! The room is too crowded.")
    } else {
        $(".introduction span").text("Nobody" + " booked the room! Try again.");
        console.log("Nobody" + " booked the room! Try again.")};
});



});