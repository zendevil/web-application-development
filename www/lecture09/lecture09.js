/**
 * Created by robertstjacquesjr on 10/6/16.
 */
var init_display = function() {
    var local_key = "local.lecture09.page.views";

    if (localStorage[local_key] !== undefined) {
        var old_views_value = localStorage[local_key];
        console.log("page views exists: " + old_views_value);
        var new_views = parseInt(old_views_value);
        localStorage[local_key] = (new_views + 1);
    }
    else {
        console.log("page views does not exist; setting to 1");
        localStorage.setItem(local_key, 1);
    }

    var page_views = parseInt(localStorage.getItem(local_key));
    if (page_views == 1) {
        $('#views').html("It's your first time here!");
    }
    else {
        $('#views').html("You have visited " + page_views + " times!");
    }
};

var display_storage = function(storage, jqo) {
   console.log("called");

    var html = "<ul>";
    for(var i=0; i<storage.length; i++) {
        var k = storage.key(i);
        var v = storage[k];

        html += "<li>" + k + " : " + v + "</li>";
    }

    html += "</ul>";
    jqo.html(html);
} ;

var display_local_storage = function() {
    display_storage(localStorage, $('#local_contents'));
} ;

var display_session_storage = function() {
    display_storage(sessionStorage, $('#session_contents'));
};

var clear_all = function() {
    localStorage.clear();
    sessionStorage.clear();
    init_display();
    display_local_storage();
    display_session_storage();

};

$(document).ready(function() {
    init_display();

    $('#local_button').click(function(event) {
        var k = $('#key').val();
        var v = $('#value').val();
        console.log('local key:value = ' + k + ':' + v);

        localStorage[k] = v;

        display_local_storage();
    });

    $('#session_button').click(function() {
        var k = $('#key').val();
        var v = $('#value').val();
        console.log('session key:value = ' + k + ':' + v);

        sessionStorage[k] = v;

        display_session_storage();
    });

    $('#clear_button').click(function(event) {
       clear_all();
    });

    display_local_storage();
    display_session_storage();
});
