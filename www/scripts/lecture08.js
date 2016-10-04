/**
 * Created by robertstjacquesjr on 10/4/16.
 *
 * Lecture 08 JavaScript/jQuery/Ajax demo
 */
$(document).ready(function() {
    console.log("Lecture 08 script loaded...");

    // when the button with the id 'fetch_pizza' is clocked...
    $('#fetch_pizza').click(get_status);
    $('#customer_name').keypress(function(event) {
        var key = event.which;
        if(key == 13) { // enter key event
            //get_status();
            get_status_simple();
        }
    });
});

var status_returned = function( data ) {   // function to execute upon a successful request
    console.log("success!");
    $('#error').empty();
    $('#name').html('Name: ' + data.name);
    $('#size').html('Size: ' + data.size);
    $('#crust').html('Crust: ' + data.crust);
    $('#toppings').html('Toppings: ' + data.toppings);
    $('#phone').html('Phone Number: ' + data.phone);
    $('#credit').html('Credit Card Number: ' + data.credit);
};

var get_status = function() {
    // get the value typed into the input field with the id 'customer_name'
    var $name = $('#customer_name').val();
    console.log("name: " + $name);

    // .ajax is the core Ajax function supported by jQuery and requires the following parameters:
    //  url: the URL of the resource to send the request to
    //  data: the data to send along with the request; encoded as a query string for GET
    //  dataType: the expected format of the data coming back in the response
    //  success: a function to execute if the request is successful
    //  error: a function to execute if the request fails for any reason
    $.ajax({
        url: 'cgi-bin/lecture08.py',  // lecture 8 script to query the pizza database

        data: {                       // the data to send
            customer_name: $name
        },

        type: "POST",                  // GET or POST

        dataType: "json",             // json format

        success: function( data ) {   // function to execute upon a successful request
            console.log("success!");
            $('#error').empty();
            $('#name').html('Name: ' + data.name);
            $('#size').html('Size: ' + data.size);
            $('#crust').html('Crust: ' + data.crust);
            $('#toppings').html('Toppings: ' + data.toppings);
            $('#phone').html('Phone Number: ' + data.phone);
            $('#credit').html('Credit Card Number: ' + data.credit);
        },

        error: function(request) {   // function to call when the request fails
            console.log("error!");
            console.log(request)
            $('.order_data').empty();
            $('#error').html("<p>There has been an error fetching the order for " + $name +
                ", are you sure that this person has an outstanding order?</p>");
        }
    });
};

var get_status_simple = function() {
    var $name = $('#customer_name').val();
    $.getJSON(
        "cgi-bin/lecture08.py",
        { customer_name: $name },
        status_returned);
};