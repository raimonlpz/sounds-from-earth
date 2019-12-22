let userClick = document.getElementById('mandala');
userClick.addEventListener('mouseover', playSound);
userClick.addEventListener('click', newMandala)



function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

let arrSounds = ['sounds/wave.mp3', 'sounds/axe.mp3', 'sounds/weapon.mp3','sounds/gear.mp3', 'sounds/bot.mp3', 'sounds/heavy.mp3', 'sounds/freeze.mp3','sounds/impact.mp3', 'sounds/echo.mp3', 'sounds/scary.mp3', 'sounds/unlock.mp3', 'sounds/ping1.mp3', 'sounds/slam.mp3', 'sounds/sonic.mp3','sounds/trailer.mp3' ];

function playSound(){
    let random = Math.floor(Math.random() * 15)
    let testSound = new Sound(arrSounds[random]);
    testSound.play();

    userClick.classList.add('rotate');
}



let arrImages = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg','images/16.jpg','images/17.jpg','images/18.jpg','images/19.jpg','images/20.jpg','images/21.jpg','images/22.jpg','images/23.jpg','images/24.jpg','images/25.jpg','images/26.jpg','images/27.jpg','images/28.jpg','images/29.jpg','images/30.jpg','images/31.jpg','images/32.jpg','images/33.jpg','images/34.jpg','images/35.jpg','images/36.jpg','images/37.jpg','images/38.jpg'];

let gallerySound = document.getElementsByClassName('newItem');

let i = 0;

function newMandala(){
  let newItem = document.createElement('img');

  newItem.setAttribute('class','newItem')
  newItem.setAttribute('src',arrImages[i])

  document.body.appendChild(newItem);

  let updateSound = new Sound('sounds/teck.mp3');
  updateSound.play();

  i++;
  if(i>arrImages.length-1){
    i = 0;
  }
}


