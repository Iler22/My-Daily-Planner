$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".inputText").val()
        var time = $(this).parent().attr("id")
        console.log(textInput)
        // console.log(time)
        localStorage.setItem(time, textInput);
    })
    
    
    $(".inputText").val(localStorage.getItem(textInput))




    var currentTime = moment().hour()

    if(currentTime > 10){
        $('.time10').addClass('past')
    } else if(currentTime === 10){
        
        $('.time10').addClass('present')
    }else {
        $('.time10').addClass('future')
    }


    $("#currentDay").text(moment().format('dddd, Do, MMM'));
})