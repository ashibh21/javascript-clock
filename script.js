let time;
let date;
let a;
const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    s = a.getHours()
    f = a.getSeconds()
    if (f < 10) {
        f = '0' + f;
    }
    if (s < 10) {
        s = '0' + s;
    }
    m = a.getMinutes()
    if (m < 10) {
        m = '0' + m;
    }

    time = s + ':' + '' + m + ':' + '' + f;
    date = a.toLocaleDateString(undefined, option);
    document.getElementById('clock').innerHTML = time;
    document.getElementById('day').innerHTML = date;
}, 1000

)
a = new Date();
s = a.getHours()
if (s > 12 && s<16) {
    document.getElementById('time').innerHTML = " Afternoon";
    document.body.style = "background-image:linear-gradient(red,yellow);";
} if (s >= 16 && s <= 24) {
    document.getElementById('time').innerHTML = " Evening";
    document.body.style = "background-image:linear-gradient(black,gray);";
}
if(s>=24 && s>=12){
    document.getElementById('time').innerHTML = " Morning";
    document.body.style = "background-image:linear-gradient(orange,yellow);";
}