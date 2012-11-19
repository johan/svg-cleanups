var NUM_FLAKES = 80;

window.onload = function init() {
  var snow = document.getElementById('snow');
  for (var i = 0; i < NUM_FLAKES; i++)
    snow.appendChild(makeFlake());
};

function px(n) { return n + 'px'; }
function seconds(value) { return value + 's'; }
function randomInt(min, max) { return min + (Math.random() * (max - min)) | 0; }
function randomFloat(min, max) { return min + Math.random() * (max - min); }

function makeFlake() {
  var max = 60
    , min = 25
    , z = randomInt(min, max)
    , div = document.createElement('div')
    , img = document.createElement('img')
    , spin_type = 'counterclockwiseSpinAndFlip'
    , spin_time = seconds(randomFloat(4, 8))
    , drop_time = seconds(Math.sqrt(min + max - z))
    , drop_delay = seconds(randomFloat(0, 5))
    ;
  if (Math.random() < 0.5) spin_type = 'clockwiseSpin';

  img.src = '../ingress.svg';
  img.setAttribute('width', z);
  img.style.webkitAnimationName = spin_type;
  img.style.webkitAnimationDuration = spin_time;

  div.className = 'flake';
  div.style.top = px(-z);
  div.style.zIndex = z;
  div.style.left = px(randomInt(0, innerWidth));
  div.style.webkitAnimationName = 'fade, drop';
  div.style.webkitAnimationDuration = drop_time +', '+ drop_time;
  div.style.webkitAnimationDelay = drop_delay +', '+ drop_delay;

  div.appendChild(img);
  return div;
}
