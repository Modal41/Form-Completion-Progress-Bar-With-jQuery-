function completion(){
    var textNull = 0; //Null input counter
    var textNotNull = 0; //Not null input counter
    var count = 0; //input counter

    /*Textarea , İnput[text,password,email,tel...]*/
    $('#formProgress .form-control').each(function(){ //each function
        if($(this).attr('name') != undefined){ //if name is undefined
            count++; //Increment count variable by 1
            if($(this).val() == "") //if val is null
                textNull++; //Increment textNull variable by 1
            else //else
                textNotNull++; ////Increment textNotNull variable by 1
        }
    });

    /*Checkbox and Radio*/
    $('#formProgress .form-check-input').each(function(){
        if($(this).attr('name') != undefined){
            count++;
            if(!$(this).is(':checked')) //if val is not checked
                textNull++;
            else
                textNotNull++;
        }
    });

    var percent = 100*textNotNull/count; //calculate percentage
    $(".progress-bar").css("width",percent+"%"); //expand progressbar
    $("#percent").html(parseInt(percent, 10)); //write in html
}

$(document).ready(function(){
    completion();
});

$("body").click(function(){
    completion();
});