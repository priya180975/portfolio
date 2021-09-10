let i=0;
let nameTxt="PRIYA NAYAK";
function typing(){
    if(i<nameTxt.length)
    {
        let nameTxtDisplay=$("#heading--main").text()+nameTxt.charAt(i);
        $("#heading--main").text(nameTxtDisplay);
        i++;
        setTimeout(typing,150);    
    }
    else
    {
        setTimeout
        (
            function(){
                $("#heading--main").slideUp();
                setTimeout(function(){
                    $("#heading--main").show();
                    $("#heading--main").text(" ");
                    i=0;
                    setTimeout(typing(),100);
                },1000)
            }
        ,500);
    }
}

$("document").ready(
    function()
    {
        $("#heading--main").text(" ");
        typing();
    }
);