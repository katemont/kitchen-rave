(function () {
  document.addEventListener("DOMContentLoaded", function () {
    console.log('Habib is beautiful and elusive');

    var body = document.getElementsByTagName('body')[0],
      kitchen = document.getElementsByClassName('kitchen')[0],
      beginRaveEl = document.getElementsByClassName('begin_rave')[0],
      endRave = document.getElementsByClassName('end_rave')[0],
      habibContainer = document.getElementsByClassName('habib_container')[0],
      beautifulHabib = document.getElementsByClassName('beautiful_habib')[0];

    function gettingFluorescent() {
      setInterval(function () {
        var color = '#',
          colors = ['FF7F50', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0', '8B008B', 'FF1493', 'FF00FF', 'FF69B4', 'FFB6C1'];
        color += colors[Math.floor(Math.random() * colors.length)];
        kitchen.style.background = color;
      }, 50);
    }

    function beginRave() {
      body.classList.remove('darkness');
      kitchen.classList.remove("hidden");
      beginRaveEl.classList.add('hidden');
      endRave.classList.remove('hidden');
      gettingFluorescent();
    }

    function endRaveMessage() {
      var messages = ['No', 'The party\'s only just started', 'sausage', 'potato', 'The rave isn\'t over', 'Have you danced with Habib yet?'],
        message = '';
      message = messages[Math.floor(Math.random() * messages.length)];
      alert(message);
    }

    function playfulHabib() {
      console.log('Habib is beautiful and playful');
      setTimeout(function () {
        habibContainer.classList.add('lil_habib_shuffle_left');
      }, 6000);
      setTimeout(function () {
        habibContainer.classList.add('lil_habib_shuffle_right');
      }, 14000);
      setTimeout(function () {
        beautifulHabib.classList.remove('playful_habib');
        habibContainer.classList.remove('lil_habib_shuffle_left');
        habibContainer.classList.remove('lil_habib_shuffle_right');
        console.log('Habib is beautiful and elusive');
      }, 18000);
    }

    beginRaveEl.onclick = beginRave;

    endRave.onclick = function () {
      kitchen.classList.add("hidden");
      body.classList.add('darkness');
      endRaveMessage();
      beginRave();
    };

    beautifulHabib.onclick = function () {
      this.classList.add('playful_habib');
      playfulHabib();
    };

  });
}(document));