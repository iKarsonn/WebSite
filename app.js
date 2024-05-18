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