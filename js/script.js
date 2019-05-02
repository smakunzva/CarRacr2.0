$(function(){
    

    /*set boolean variable complete to false*/
    var isComplete = false;

    /*set a string variable for comming first*/
    var position = 'first';
    
    function complete() {
        
        if(isComplete === false) {
            isComplete = true;
        } else {
            position = 'second';
        }
    }
    
    /*click the go button*/
    $('#go').click(function() {
        
        /*get the width of the cars*/
        var width1 = $('#car1').width();
        
        /*get the width of the race track*/
        var trackWidth = (($(window).width) - width1);
        
        /*generate a random number between 1 and 5000*/
        var time1 = Math.floor((Math.random * 5000) + 1);
        var time2 = Math.floor((Math.random * 5000) + 1);
        
        
        /*animate the first car racing*/
        $('#car1').animate({
            left: trackWidth
        }, time1, function() {
            
            
            //check if another car has already completed the race
            complete();
            
            $('#raceInfo1 span').text('Came in ' + position + ' place and completed in ' + time1 + ' milliseconds!!');
        });
        
        
        /*animate the second car racing*/
        $('#car2').animate({
            left: trackWidth
        }, time1, function() {
            
            
            //check if another car has already completed the race
            complete();
            
            $('#raceInfo2 span').text('Came in ' + position + ' place and completed in ' + time1 + ' milliseconds!!');
        });
    });
    
    $('#reset').click(function() {
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
    });
})