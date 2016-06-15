// wait for the dom to be ready
// IMPORTANT = ADD THIS TO EACH JS FILE YOU WRITE!!!
$(document).on('ready', function() {
  // vanilla JS
  // var helloButton = document.getElementById('hello-button');
  // helloButton.addEventListener('click', function() {
  //   //write any code in here that ppens onclick
  // });

  // jQuery - or, the right way
  $('#hello-button').click(function() {
    $(this).toggleClass('btn');
  });

  // listen for the click event on the submit button
  $('#add-user').click(function() {
    var userNameInput = $('#user-input');
    var usersList = $('#users-list');
    usersList.append('<li>' + userNameInput.val() + '</li>');

    //clear input value
    userNameInput.val(null);

    //focus the users input
    userNameInput.focus();

  });
    // keyup
    $('#user-input').keyup(function(){
      console.log('user input keydown');
    });
});
