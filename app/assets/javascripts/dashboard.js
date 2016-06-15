// wait for the dom to be ready
// IMPORTANT = ADD THIS TO EACH JS FILE YOU WRITE!!!
$(document).on('ready', function() {
  $('#name-list li:nth-child(2)').css('color', 'red');

  function addUser() {
    // grabbing the whole input element off the page
    var userNameInput = $('#user-input');

    //grapping the whole unodred list off the page
    var usersList = $('#users-list');

    //dupe var
    var dupe = false;

    // check for duplicates
    usersList.find('li').each(function() {
      if($(this).text() === userNameInput.val().trim()) {
        alert('You cannot have duplicates!')
        dupe = true;
      }
    });

    // append some html to the users list
    if(!dupe) {
      usersList.append('<li>' + userNameInput.val() + '</li>');
    }
    //clear input value
    userNameInput.val(null);

    //focus the users input
    userNameInput.focus();
  }

  // jQuery - or, the right way
  $('#hello-button').click(function() {
    $(this).toggleClass('btn');
  });

  // listen for the click event on the submit button
  $('#add-user').click(function() {
    addUser();
  });

  // keyup
  $('#user-input').keyup(function(e){
    if(e.keyCode === 13) {
      addUser();
    }
  });

  $('#show-text').click(function() {
    var button = $(this);

    $('#fake-text').slideToggle(700, function() {
      if($(this).is('hidden')) {
        // button text should be show text
        button.text('Show Text');
      } else {
        // button text should be hide text
        button.text('Hide Text');
      }
    });
  });

});














// vanilla JS
// var helloButton = document.getElementById('hello-button');
// helloButton.addEventListener('click', function() {
//   //write any code in here that ppens onclick
// });
