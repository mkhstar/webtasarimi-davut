const topic = document.getElementById('topic').getAttribute('data-topic');
const icons = document.querySelectorAll('#topic img');
const lessonInfoContent = document.querySelector('.lesson-info-content');
const iframeVideo = document.getElementById('video-iframe');
const url = new URL(location.href);
const girisCikisContainer = document.querySelector('.giris-cikis-container');

const data = [];
Object.keys(window.donanimlar).forEach(donanim => {
  Object.keys(window.donanimlar[donanim]).forEach(b => {
    data.push({
      text: window.donanimlar[donanim][b].title,
      link: location.origin + location.pathname.slice(0, location.pathname.lastIndexOf('/')) + "/" + window.donanimlar[donanim][b].htmlDoc + "?search=" + b
    })
  })
});
const completeOptions = {
  data,
  getValue: "text",
  template: {
    type: "links",
    fields: {
      link: "link"
    }
  },
  list: {
    match: {
      enabled: true
    }
  }
};
$("#search").easyAutocomplete(completeOptions);

if (url.searchParams.get("search")) {
  if (!$('main').hasClass('closed')) {
    $('main').addClass('closed').hide().slideDown(1000);
  }
  bringTopic(url.searchParams.get("search"));
}
if (url.searchParams.get("input")) {
  document.querySelector('.search-field form input').value = url.searchParams.get("input");
}

if (icons) {
  icons.forEach(icon => {
    icon.addEventListener('click', e => {
      if (!$('main').hasClass('closed')) {
        $('main').addClass('closed').hide().slideDown(1000);
      }
      bringTopic(e.target.alt)
    })
  })
}

function bringTopic(alt) {
  let topicObject = window.donanimlar[topic][alt];

  if (topicObject === undefined) {
    lessonInfoContent.style.display = "flex";
    lessonInfoContent.innerHTML = "<h1 style='justify-content:center; align-items:center;align-content:center; align-self:center;'>Bu konuda böyle bir bileşeni bulunamadı... </h1>";
  } else {
    lessonInfoContent.innerHTML = topicObject.innerHtml;
    $(lessonInfoContent).hide().fadeIn(500);
    iframeVideo.src = topicObject.iframeSrc;
  }

}

function bringEtkinlik(btn, number) {
  if (!$('main').hasClass('closed')) {
    $('main').addClass('closed').hide().slideDown(1000);
    document.querySelectorAll('.etkinlik-field').forEach(field =>
      $(field).removeClass('col-sm-4').addClass('col-sm-2'))
  }
  document.querySelectorAll('.etkinlik-field button').forEach(button => button.className = "btn btn-outline-success");
  btn.className = "btn btn-success";
  iframeVideo.src = window.etkinlikler[number].iframe;
}

function changeGirisCikis(e, topic) {
  document.querySelectorAll('.col-btn button').forEach(button => button.className = "btn btn-outline-success");
  iframeVideo.src = window.girisCikis[topic].iframe;
  girisCikisContainer.innerHTML = window.girisCikis[topic].innerHtml;
  e.className = "btn btn-success";
}
document.querySelector('.search-field form').addEventListener('submit', e => {
  e.preventDefault();
  if (!$('main').hasClass('closed')) {
    $('main').addClass('closed').hide().slideDown(1000);
  }
  bringTopicSearch(e.target.querySelector('input').value);
});

function bringTopicSearch(value) {
  let result;
  let index;
  Object.keys(window.donanimlar).forEach(d => {
    Object.keys(window.donanimlar[d]).forEach(b => {
      index = b;
      let bilesen = window.donanimlar[d][b];
      if (bilesen.title.trim().toLowerCase().indexOf(value.trim().toLowerCase()) >= 0) {
        result = bilesen;
        window.location.href = window.location.origin + location.pathname.slice(0, location.pathname.lastIndexOf('/')) + "/" + result.htmlDoc + "?search=" + index + "&input=" + value;
      }
    })
  });
  if (result === undefined) {
    lessonInfoContent.style.display = "flex";
    lessonInfoContent.innerHTML = "<h1 style='justify-content:center; align-items:center;align-content:center; align-self:center;'>Bu konuda böyle bir bileşeni bulunamadı... </h1>";
  }
}