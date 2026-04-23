var currentlanguage = 'en';

const translations = {
    about: { en: 'about', es: 'sobre mi' },
    work: { en: 'work', es: 'proyectos' },
    contact: { en: 'curriculum', es: 'curriculum' },
    career: { en: 'Software Engineer / Game Developer', es: 'Ingenieria de software / Desarrollo de videojuegos' }

};

function changelang() {
    currentlanguage = currentlanguage === 'en' ? 'es' : 'en';

    for (const [id, texts] of Object.entries(translations)) {
        const el = document.getElementById(id);
        if (el) el.innerText = texts[currentlanguage];
    }

    document.getElementById('lang-btn').innerText = currentlanguage === 'en' ? 'ES' : 'EN';
}
function showvideogames() {
    document.getElementById('videogames_section').style.display = 'block';
}
function closevideogames() {
    document.getElementById('videogames_section').style.display = 'none';
}

function showapps() {
    document.getElementById('apps_section').style.display = 'block';
}
function closeapps() {
    document.getElementById('apps_section').style.display = 'none';
}
function showabout() {
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutRight");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInUp");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutRight");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
