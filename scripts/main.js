$(document).ready( function() {

  $('.begin_rave').click(function() {
    beginRave();
  });

  $('.end_rave').click(function(){
    $('#kitchen').addClass("hidden");
    $('body').addClass('darkness');
    endRaveMessage();
    beginRave();
  });

  function beginRave() { 
    $('body').removeClass('darkness');
    $('#kitchen').removeClass("hidden");
    $('.begin_rave').addClass('hidden');
    $('.end_rave').removeClass('hidden');
    gettingFluorescent();
  }

  function gettingFluorescent(){
    setInterval(function() {
         var color = '#';
         var letters = ['FF7F50','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0','8B008B','FF1493','FF00FF','FF69B4','FFB6C1']; 
         color += letters[Math.floor(Math.random() * letters.length)];
         document.getElementById('kitchen').style.background = color;
    }, 30);
  }

  function endRaveMessage(){
    var message;
    var messages = ['No!', 'No! The party\'s only just started!', 'sausage', 'potato', 'The rave isn\'t over yet.'];
    message = messages[Math.floor(Math.random() * messages.length)];
    alert(message);
  }

});




