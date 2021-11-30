$(document).ready(function () {


    $("#currentDay").text(moment().format('dddd, Do, MMM'));


    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".inputText").val()
        var time = $(this).parent().attr("id")
        console.log(textInput)
        console.log(time)
        localStorage.setItem(time, textInput)
    })


    var currentTime = moment().hour();
    $('.container').children('.row').each(function () {
        console.log(this)
        console.log(this.id.replace('time', ''))
        var timeBlock = this.id.replace('time', '')
        console.log(`Comparing currentTime to timeBlock: ${currentTime} > ${timeBlock} | ${currentTime > timeBlock}`)
        if (currentTime > timeBlock) {
            $(this).children('input').addClass('past')
        }
        else if (currentTime >= timeBlock) {
            $(this).children('input').addClass('present')
        }
        else {
            $(this).children('input').addClass('future')
        }
    })

    // if (currentTime > 9) {
    //     $('.time9').addClass('past')
    // }
    // else if (currentTime === 9) {
    //     $('.time9').addClass('present')
    // }
    // else {
    //     $('.time9').addClass('future')
    // }
    // if (currentTime > 10) {
    //     $('.time10').addClass('past')
    // }
    // else if (currentTime === 10) {
    //     $('.time10').addClass('current')
    // }
    // else {
    //     $('.time10').addClass('future')
    // }
    // if (currentTime > 11) {
    //     $('.time11').addClass('past')
    // }
    // else if (currentTime === 11) {
    //     $('.time11').addClass('present')
    // }
    // else {
    //     $('.time11').addClass('future')
    // }
    // if (currentTime > 12) {
    //     $('.time12').addClass('past')
    // }
    // else if (currentTime === 12) {
    //     $('.time12').addClass('present')
    // }
    // else {
    //     $('.time12').addClass('future')
    // }
    // if (currentTime > 1) {
    //     $('.time1').addClass('past')
    // }
    // else if (currentTime === 1) {
    //     $('.time1').addClass('present')
    // }
    // else {
    //     $('.time1').addClass('future')
    // }
    // if (currentTime > 2) {
    //     $('.time2').addClass('past')
    // }
    // else if (currentTime === 2) {
    //     $('.time2').addClass('present')
    // }
    // else {
    //     $('.time2').addClass('future')
    // }
    // if (currentTime > 3) {
    //     $('.time3').addClass('past')
    // }
    // else if (currentTime === 3) {
    //     $('.time3').addClass('present')
    // }
    // else {
    //     $('.time3').addClass('future')
    // }
    // if (currentTime > 4) {
    //     $('.time4').addClass('past')
    // }
    // else if (currentTime === 4) {
    //     $('.time4').addClass('present')
    // }
    // else {
    //     $('.time4').addClass('future')
    // }
    // if (currentTime > 5) {
    //     $('.time5').addClass('past')
    // }
    // else if (currentTime === 5) {
    //     $('.time5').addClass('present')
    // }
    // else {
    //     $('.time5').addClass('future')
    // }

    $("#time9 .inputText").val(localStorage.getItem("time9"));
    $("#time10 .inputText").val(localStorage.getItem("time10"));
    $("#time11 .inputText").val(localStorage.getItem("time11"));
    $("#time12 .inputText").val(localStorage.getItem("time12"));
    $("#time13 .inputText").val(localStorage.getItem("time13"));
    $("#time14 .inputText").val(localStorage.getItem("time14"));
    $("#time15 .inputText").val(localStorage.getItem("time15"));
    $("#time16 .inputText").val(localStorage.getItem("time16"));
    $("#time17 .inputText").val(localStorage.getItem("time17"));
})




