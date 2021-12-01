$(document).ready(() => {


    // on form submit function
    $('form').submit((e) => {
        e.preventDefault();

        $('main .wrapper').fadeOut('fast')
        inputVal = $('form input').val();
        fetchResults(inputVal);
    })
})