const metadata = [
  {
    alt: (
        'Writers Porsha Olayiwola and Marshall &quot;Gripp&quot; Gillson ' +
        'looking suave.'),
    credit: 'Marshall Gillson',
  },
  {
    alt: (
        'Writers Porsha Olayiwola and Marshall &quot;Gripp&quot; Gillson ' +
        'gazing into the trees.'),
    credit: 'Sam Rush',
  },
  {
    alt: 'Cast member Cheyenne Harvey leading an exercise during rehearsal.',
    credit: 'Cheyenne Harvey',
  },
];

let flipPic = (num) => {
  let frame = $('div#frame');
  frame.empty();
  let photo = `
    <img
        alt="${metadata[num].alt}"
        src="/img/${num}.png"
        title="${metadata[num].alt}" />
    <span id="photo-credit">📸${metadata[num].credit}</span>
  `
  frame.append(photo);
};

let init = () => {
  let showActions = $('ul.show-actions');
  if ((new Date($.now())).getTime() > 1568649600000) {
    showActions.show();
  } else {
    showActions.empty();
  }

  for (let i = metadata.length - 1; i >= 0; i--) {
    makeThumbNum(i).click(() => { flipPic(i); });
  }
};

let makeThumbNum = (num) => {
  let thumb = $(`
    <button class="thumb">
      <img
          alt="${metadata[num].alt}"
          src="/img/${num}.png"
          title="${metadata[num].alt}" />
    </button>
  `);
  $('div#photo-grid').append(thumb);
  return thumb;
};

$(document).ready(init);
