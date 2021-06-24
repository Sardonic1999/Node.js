// tepadan pastga qarab tekshiradi agar amal qanoatlantirsa osha joyda toxtaydi.

havo = 60    // o'zgaruvchi

if(havo > 20 && havo < 50){
    console.log('havo issiq')
} else if(havo <= 20 && havo > 0){
    console.log('havo iliq')
} else if(havo < 0){
    console.log('havo sovuq')
} else{
    console.log('internet down')  // tepadagi amallar bajarilmasa. alternativ sifatida else
}
