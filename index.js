var currentlanguage = 'en';

const translations = {
    about: { en: 'about', es: 'sobre mi' },
    work: { en: 'proyects', es: 'proyectos' },
    curriculum: { en: 'curriculum', es: 'curriculum' },
    career: { en: 'Software Developer / Game Developer', es: 'Desarrollo de software / Desarrollo de videojuegos' },

    projecth1: { en: 'Proyects.', es: 'Proyectos.' },
    projecth2: { en: 'Proyects' , es: 'Proyectos' },
    projectd1: { en: "A showcase of several personal projects I've done or participated in." , es: 'Una muestra de distintos proyectos que he hecho o en los que he participado.' },
    videogames: { en: 'Videogames' , es:'Videojuegos' },
    Apps: { en: 'Apps' , es:'Aplicaciones' },
    videogamesh2: { en: 'The sins we made.', es:'The sins we made.' },
    videogamesd1: {
        en: "A horror game made with some friends in Halloween for the 5th Edition Game Scholars's Game Jam.",
        es: "Un juego de terror hecho con algunos amigos para la 5ª Edición de la Game Jam de Game Scholar's."
    },
    seeProject1: { en: 'See the proyect', es: 'Ver el proyecto' },

    abouth1: { en: 'About.', es: 'Sobre mi.'},
    aboutme: { en: 'About me', es: 'Sobre mi' },
    aboutmed1: {
        en: 'Aspiring Game Design and Development student actively seeking internship opportunities to kickstart my professional journey. I am highly motivated to contribute to innovative projects and join diverse teams across various sectors to broaden my horizons and sharpen my skill set.',
        es: 'Estudiante de Diseño y Desarrollo de Videojuegos buscando prácticas para dar el pistoletazo de salida a mi carrera profesional. Estoy motivada para aportar valor en proyectos innovadores y unirme a equipos diversos en distintos sectores para ampliar mis horizontes y pulir mis habilidades.'
    },
    aboutmed2: {
        en: 'Open to exploring opportunities beyond the gaming industry to apply my creative problem-solving and technical expertise in new professional contexts.',
        es: 'Abierta a explorar nuevas oportunidades fuera de la industria del videojuego para aplicar mi capacidad creativa de resolución de problemas y mi experiencia técnica en nuevos entornos profesionales.'
    },
    programmingLanguage: { en: 'Programming language', es: 'Lenguajes de programación' },
    appsaboutme: { en: 'Apps', es: 'Aplicaciones' },
    contact: { en: 'Contact', es: 'Contacto' },
    contactd1: { en: 'Feel free to reach out via my socials or send me a email at: smonteron001@gmail.com.', es: 'Sientete libre de contactarme en alguna de mis redes sociales o de enviarme un correo a: smonteron001@gmail.com.' },





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
        $("#curriculum").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
