$(function(){
    // preload audio
    var toast = new Audio('toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
         // first pause the audio (in case it is still playing)
         toast.pause();
         // reset the audio
         toast.currentTime = 0;
        // play audio
        toast.play();
       
        var productName = $(this).data("name");
        $('#product').html(productName);
        var productCode = $(this).data("code");
        $('#code').html(productCode);
        $('#toast').toast({ autohide: false }).toast('show');
    });
});



