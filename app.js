var mainimg = document.querySelector('img')
var images=['images/karaca_magarasi.webp', 'images/artabel_golleri.jpg', 'images/cam_teras.jpg']
var num = 0;

function forward() {
num++
if(num >=images.length){
    num = 0;
    maining.src=images[num]
}else{
maining.src=images[num]
}
}

function back() {
    num--
    if(num<0){
num=images.length-1
maining.src=images[num]
}else{
    maining.src=images[num]
}
}


const settings = {
    async: true,
    crossDomain: true,
    url: 'https://football98.p.rapidapi.com/competitions',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '72bea13727mshc282a661d79d21cp15b54djsn441b5a086030',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
};

// API'den yarışmaların bilgilerini almak için isteği yap
$.ajax(settings).done(function (response) {
    // Cevap alındığında bu kod bloğu çalışacak
    console.log(response); // Gelen verileri konsola yazdır
    // Örnek olarak, yarışmaların adlarını ve ülkelerini görüntüleyebiliriz
    for (let i = 0; i < response.length; i++) {
        const competition = response[i];
        console.log('Yarışma Adı:', competition.name);
        console.log('Ülke:', competition.country);
        console.log('-------------------------------------');
    }
}).fail(function (xhr, status, error) {
    // İstek başarısız olduğunda bu kod bloğu çalışacak
    console.error('API İsteği Başarısız Oldu:', error); // Hata mesajını konsola yazdır
});
