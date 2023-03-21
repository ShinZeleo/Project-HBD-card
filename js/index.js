(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

  var birthdayMessages = [
    "konnichiwa ... Cie hari ini ulang tahun ya, happy birthdayyy and wish you all the best deh pokoknya. oiya maaf ya baru bisa ngasih kaya ginian gua gatau lu suka atau ga dikirimin kaya gini semoga ga cringe yaa wkwk nanti kadonya nyusul, tenang aja udh siap kok kadonya dan semoga suka sama kadonya. sebenernya gua ada banyak hal sih yang pengen gua omongin ke lu, tapi gua takutnya lu ga baca ini semua, tapi gapapa lah semoga lu baca yaa...",
    "jadi gini… gua kan kondisinya sekarang lagi berjuang untuk dapetin lu, nah gua gatau sampe sekarang apa hal yg semua gua lakuin itu cukup menunjukkan kalo gua itu emang serius kali ini. Kalo lu nanya 'kenapa lu sebegitunya perjuangin gua?' ya karena gua cintanya cuman sama lu. Gua udah gagal berkali-kali dan gua gamau gagal lagi kali ini, dan satu hal yang bikin gua juga tetap bertahan perjuangin lu adalah gua gamau lu jatuh di tangan cowo yang gabener lagi.",
    "Insyaallah kalo lu sama gua, gua akan ngejaga dan ngelindungin lu sekuat tenaga gua dan sebisa mungkin gua gamau buat masalah sampe bikin lu nangis karena gua gakuat liat cewe yang gua sayang nangis. Bahkan gua akan terus berhati-hati dengan omongan gua, karena gua gamau bikin lu kecewa sedikitpun apalagi sampe buat lu keluar air mata. Gua bisa pastiin semua hal yang gua ketik diatas bukan sekedar omong kosong belaka, gua bisa buktiin itu.",
    "Oiya gua akan terus berjuang untuk dapetin lu sampai lu sendiri yang suruh gua menjauh maka gua akan menjauh, yang jelas gua pengen buat lu bahagia bagaimanapun caranya, yaa walaupun gua berharapnya lu jodoh ama gw wkwk. Apapun itu yang terbaik buat orang yang paling gua sayangi gua gabisa nolak.",
  ];

  var index = 0;
  var birthdayMessageElement = document.getElementById("birthday-message");

  // Atur interval untuk mengubah pesan setiap 20 detik
  setInterval(function() {
    birthdayMessageElement.innerHTML = birthdayMessages[index];
    index = (index + 1) % birthdayMessages.length;
  }, 25000);
  
}());
