$("#teleport-btn").click(() =>
{
    //ONE WAY OF SOLWOING
    // if($(".input-right").val() == ""){
    //     $(".input-right").val($(".input-left").val())
    //     $(".input-left").val("")
    // }else{
    // $(".input-left").val($(".input-right").val())
    // $(".input-right").val("")
    // }
 
    const temp = $(".input-left").val();
    $(".input-left").val($(".input-right").val());
    $(".input-right").val(temp);


});