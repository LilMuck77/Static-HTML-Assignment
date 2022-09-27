$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

// uncheck all checkboxes (FireFox)

$('.form-check-input').each(function () 
{
    $(this).prop('checked', false);
});

// event listener for check/uncheck
$('.form-check-input').on('change', function () 
{
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
    $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
    $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

//all balloons checked
$('#all').on('change', function () 
{
    $('#redImg').css('visibility', 'visible')
    $('#blueImg').css('visibility', 'visible')
    $('#greenImg').css('visibility', 'visible')

    $('#all').is(':checked') ?
    $($('#redImg').removeClass().addClass('animate__animated animate__bounceInDown') +
    $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown') +
    $('#greenImg').removeClass().addClass('animate__animated animate__bounceInDown')) :

    $($('#redImg').addClass('animate__animated animate__bounceOutUp') +
    $('#blueImg').addClass('animate__animated animate__bounceOutUp') +
    $('#greenImg').addClass('animate__animated animate__bounceOutUp'))
});

//check all boxes
$('#all').click(function () 
{    
    $('#red').prop('checked', this.checked);
    $('#green').prop('checked', this.checked);
    $('#blue').prop('checked', this.checked);
    $('#all').prop('checked', this.checked);
  
});
$('#none').click(function () 
{    
    $('#red').prop('checked', !this.checked);
    $('#green').prop('checked', !this.checked);
    $('#blue').prop('checked', !this.checked);
    $('#all').prop('checked', !this.checked);

    $($('#redImg').addClass('animate__animated animate__bounceOutUp') +
    $('#blueImg').addClass('animate__animated animate__bounceOutUp') +
    $('#greenImg').addClass('animate__animated animate__bounceOutUp'))
  
    // if($('#none').on('change', !this.checked))
    // {    
    //     $('#red').prop('checked', !this.checked);
    //     $('#green').prop('checked', !this.checked);
    //     $('#blue').prop('checked', !this.checked);
    //     $('#all').prop('checked', !this.checked);
    // }
});








var array = ["animate__bounce", "animate__heartBeat", "animate__flash", "animate__pulse",
    "animate__rubberBand", "animate__shakeX", "animate__shakeY",
    "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello"];
var randomSeeker = array[Math.floor(Math.random() * array.length)];

$('#greeting').addClass(randomSeeker);

$('.form-check-label').on('mouseover', function (e) 
{
    e.preventDefault();
    $('#greeting').css('color', $(this).data('color'));

})
$('.form-check-label').on('mouseout', function (e) 
{
    e.preventDefault();
    $('#greeting').css('color', 'slategrey');
})




var toast = new Audio('toast.wav');
$('.code').on('click', function (e) 
{
    e.preventDefault();
    // first pause the audio (in case it is still playing)
    var isChecked = false;
    $('.form-check-input').each(function () {
        if ($(this).is(':checked')) {
            isChecked = true;
        };
    });
    if (!isChecked) {
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    }
});
