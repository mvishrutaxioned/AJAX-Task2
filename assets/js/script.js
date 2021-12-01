$(document).ready(() => {

    // variables
    var inputVal;
    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');

    // months array
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // on form submit function
    $('form').submit((e) => {
        e.preventDefault();

        $('main .wrapper').fadeOut('fast')
        inputVal = $('form input').val();
        fetchResults(inputVal);
    })
})