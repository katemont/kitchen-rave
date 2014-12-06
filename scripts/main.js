$(document).ready( function() {

  $('.begin_rave').click(function() {
    beginRave();
  });

  function beginRave() { 
    $('body').removeClass('darkness');
    $('#kitchen').removeClass("hidden");
    var color = '#';
    var letters = ['FF7F50','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0','8B008B','FF1493','FF00FF','FF69B4','FFB6C1']; 
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('kitchen').style.background = color;
  }

});




