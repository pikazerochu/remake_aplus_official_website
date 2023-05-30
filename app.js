//這段是決定要不要開頭動畫
var cookies = document.cookie
console.log(cookies)
var if_from_self='false'
for (const cookie of cookies.split('; ')){
    if (cookie.split('=')[0]=='fromself'){
        if_from_self = cookie.split('=')[1]
        break
    }
}
if (if_from_self=='false') {
    splash_screen_inner = document.getElementById('splash-screen-inner')
    splash_screen_inner.style.width = '100%'
    this.setTimeout(function(){
        splash_screen_img = document.getElementById('splash-screen-img')
        splash_screen_img.style.opacity = "1"
        splash_screen_url = document.getElementById('splash-screen-url')
        splash_screen_url.style.opacity = "1"
        console.log('splash-screen-img')
        setTimeout(function(){
            splashScreen = document.getElementById('splash-screen');
            splashScreen.style.background = '#ffffff00'
            splash_screen_inner.style.width = "0px"
            splash_screen_img = document.getElementById('splash-screen-img')
            splash_screen_img.style.display="none"
            splash_screen_url = document.getElementById('splash-screen-url')
            splash_screen_url.style.display="none"
            setTimeout(function(){
                splashScreen.style.display="none"
            },1000)
        },1000);
    },1000)
} else {
    splashScreen = document.getElementById('splash-screen');
    splashScreen.style.display="none"
}
    

document.getElementById("apluslogo").addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('index.html');
});

var about_aplus = document.getElementById("about_aplus")
about_aplus.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('index.html');
});
about_aplus.addEventListener('mouseover',function(){
    about_aplus.style.color = "#efdd8d"
});
about_aplus.addEventListener('mouseout',function(){
    about_aplus.style.color = "white"
});

var contact_us = document.getElementById("contact_us")
contact_us.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('apply.html')
});
contact_us.addEventListener('mouseover',function(){
    contact_us.style.color = "#efdd8d"
});
contact_us.addEventListener('mouseout',function(){
    contact_us.style.color = "white"
});

var aplus_training =  document.getElementById("aplus_training")
aplus_training.addEventListener('mouseover',function(){
    aplus_training_dropmeau.style.display = "block"
});
aplus_training.addEventListener('mouseout',function(){
    aplus_training_dropmeau.style.display = "none"
});

var aplus_training_dropmeau = document.getElementById("aplus_training_dropmeau")
aplus_training_dropmeau.addEventListener('mouseover',function(){
    aplus_training_dropmeau.style.display = "block"
});
aplus_training_dropmeau.addEventListener('mouseout',function(){
    aplus_training_dropmeau.style.display = "none"
});

var aplus_tools =  document.getElementById("aplus_tools")
aplus_tools.addEventListener('mouseover',function(){
    aplus_tools_dropmeau.style.display = "block"
});
aplus_tools.addEventListener('mouseout',function(){
    aplus_tools_dropmeau.style.display = "none"
});
var aplus_tools_dropmeau = document.getElementById("aplus_tools_dropmeau")
aplus_tools_dropmeau.addEventListener('mouseover',function(){
    aplus_tools_dropmeau.style.display = "block"
});
aplus_tools_dropmeau.addEventListener('mouseout',function(){
    aplus_tools_dropmeau.style.display = "none"
});

var leadership = document.getElementById("leadership")
leadership.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('leadership.html')
});
leadership.addEventListener('mouseover',function(){
    leadership.style.color = "#efdd8d"
});
leadership.addEventListener('mouseout',function(){
    leadership.style.color = "white"
});

var enlightenment = document.getElementById("enlightenment")
enlightenment.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('enlightenment.html')
});
enlightenment.addEventListener('mouseover',function(){
    enlightenment.style.color = "#efdd8d"
});
enlightenment.addEventListener('mouseout',function(){
    enlightenment.style.color = "white"
});

var preserverance = document.getElementById("preserverance")
preserverance.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('preserverance.html')
});
preserverance.addEventListener('mouseover',function(){
    preserverance.style.color = "#efdd8d"
});
preserverance.addEventListener('mouseout',function(){
    preserverance.style.color = "white"
});

var liberty = document.getElementById("liberty")
liberty.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('liberty.html')
});
liberty.addEventListener('mouseover',function(){
    liberty.style.color = "#efdd8d"
});
liberty.addEventListener('mouseout',function(){
    liberty.style.color = "white"
});

var influentialwords = document.getElementById("influentialwords")
influentialwords.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('influentialwords.html')
});
influentialwords.addEventListener('mouseover',function(){
    influentialwords.style.color = "#efdd8d"
});
influentialwords.addEventListener('mouseout',function(){
    influentialwords.style.color = "white"
});

var ateamlogos = document.getElementById("ateamlogos")
ateamlogos.addEventListener('click',function(){
    document.cookie = 'fromself=true; max-age=1;'
    window.location.assign('ateamlogos.html')
});
ateamlogos.addEventListener('mouseover',function(){
    ateamlogos.style.color = "#efdd8d"
});
ateamlogos.addEventListener('mouseout',function(){
    ateamlogos.style.color = "white"
});
