$(document).ready(function () {


    $("#currentDay").text(moment().format('dddd, Do, MMM'));


    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".inputText").val()
        var time = $(this).parent().attr("id")
        console.log(textInput)
        console.log(time)
        localStorage.setItem(time, textInput)
    })


    $("#time9 .inputText").val(localStorage.getItem("time9"));
    $("#time10 .inputText").val(localStorage.getItem("time10"));
    $("#time11 .inputText").val(localStorage.getItem("time11"));
    $("#time12 .inputText").val(localStorage.getItem("time12"));
    $("#time1 .inputText").val(localStorage.getItem("time1"));
    $("#time2 .inputText").val(localStorage.getItem("time2"));
    $("#time3 .inputText").val(localStorage.getItem("time3"));
    $("#time4 .inputText").val(localStorage.getItem("time4"));
    $("#time5 .inputText").val(localStorage.getItem("time5"));


    function timeUpdate() {

        var currentTime = moment.duration().hours();

        $("#hourBlock").each(function () {
            var blockHour = parseInt($(this).attr('id').split("-")[1]);

            if (blockHour < currentTime) {
                $(this).addClass("past");
            } else if (blockHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    timeUpdate()
})
