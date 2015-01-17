$(document).ready( function() {
  console.log('Habib is beautiful and elusive');

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
    }, 50);
  }

  function endRaveMessage(){
    var message;
    var messages = ['No', 'The party\'s only just started', 'sausage', 'potato', 'The rave isn\'t over', 'Have you danced with Habib yet?'];
    message = messages[Math.floor(Math.random() * messages.length)];
    alert(message);
  }

  $('.beautiful_habib').click(function() {
    $(this).addClass('playful_habib');
    console.log('Habib is beautiful and playful');
    setTimeout(function() {
      $('.habib_container').addClass('lil_habib_shuffle_left');
    }, 6000);
    setTimeout(function() {
      $('.habib_container').addClass('lil_habib_shuffle_right');
    }, 14000);
    setTimeout(function() {
      $('.beautiful_habib').removeClass('playful_habib');
      $('.habib_container').removeClass('lil_habib_shuffle_left');
      $('.habib_container').removeClass('lil_habib_shuffle_right');
      console.log('Habib is beautiful and elusive');
    }, 18000);
  });  

});




