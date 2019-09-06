const metadata = [
  {
    alt: (
        'Writers Porsha Olayiwola and Marshall "Gripp" Gillson looking suave.'),
    credit: 'Marshall Gillson',
  },
  {
    alt: (
        'Writers Porsha Olayiwola and Marshall "Gripp" Gillson gazing into ' +
        'the trees.'),
    credit: 'Sam Rush',
  },
];

let flipPic = (num) => {
  let frame = $('div#frame');
  frame.empty();
  let photo = (
      '<img src="/img/' + num  + '.png" /><span id="photo-credit">📸' +
      metadata[num].credit + '</span>');
  frame.append(photo);
};

let init = () => {
  for (let i = 0; i < metadata.length; i++) {
    makeThumbNum(i).click(() => { flipPic(i); });
  }
};

let makeThumbNum = (num) => {
  let thumb = $(
      '<div class="thumb"><img src="/img/' + num + '.png" alt="' +
      metadata[num].alt  + '" /></div>');
  $('div#photo-grid').append(thumb);
  return thumb;
};

$(document).ready(init);
