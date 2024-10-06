document.getElementById('starship-vid').addEventListener('click', function(event) { openStarshipVideo()});

function openStarshipVideo() {

  const url = 'https://www.youtube.com/watch?v=ApMrILhTulI&t=3s';

  const windowFeatures = 'width=600,height=400,top=100,left=100,scrollbars=no,resizable=no';

  window.open(url, 'youtubeVideo' , windowFeatures);
}

document.getElementById('dragon-vid').addEventListener('click', function(event) {openDragonVideo()});

function openDragonVideo() {

  const url = 'https://www.youtube.com/watch?v=1gmvUPTdoP4'

  const windowFeatures = 'width=600,height=400,top=100,left=100,scrollbars=no,resizable=no';

  window.open(url, 'youtubeVideo' , windowFeatures);
}

document.getElementById('falcon9-vid').addEventListener('click', function(event) {openFalconVideo()});

function openFalconVideo() {

  const url = 'https://www.youtube.com/watch?v=Z4TXCZG_NEY'

  const windowFeatures = 'width=600,height=400,top=100,left=100,scrollbars=no,resizable=no';

  window.open(url, 'youtubeVideo' , windowFeatures);
}

document.getElementById('falcon-heavy-vid').addEventListener('click', function(event) {openFalconHeavyVideo()});

function openFalconHeavyVideo() {

  const url = 'https://www.youtube.com/watch?v=pYRLXDs9mj8'

  const windowFeatures = 'width=600,height=400,top=100,left=100,scrollbars=no,resizable=no';

  window.open(url, 'youtubeVideo' , windowFeatures);
}

