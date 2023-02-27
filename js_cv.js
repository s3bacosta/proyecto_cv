/** botones ocultar */

document.getElementById('ocultar_info').addEventListener('click',function() {
    document.getElementById('informacion').style.display = 'none';
});

document.getElementById('ocultar_experiencia').addEventListener('click',function() {
    document.getElementById('experiencia').style.display = 'none';
});

document.getElementById('ocultar_educacion').addEventListener('click',function() {
    document.getElementById('educacion').style.display = 'none';
});

document.getElementById('ocultar_idiomas').addEventListener('click',function() {
    document.getElementById('idiomas').style.display = 'none';
});

document.getElementById('ocultar_habilidades').addEventListener('click',function() {
    document.getElementById('habilidades').style.display = 'none';
});


/** botones mostrar */

document.getElementById('info_personal').addEventListener('click',function() {
    document.getElementById('informacion').style.display = 'block';
});

document.getElementById('experiencia_laboral_').addEventListener('click',function() {
    document.getElementById('experiencia').style.display = 'block';
});

document.getElementById('educacion_').addEventListener('click',function() {
    document.getElementById('educacion').style.display = 'block';
});

document.getElementById('idiomas_').addEventListener('click',function() {
    document.getElementById('idiomas').style.display = 'block';
});

document.getElementById('habilidades_').addEventListener('click',function() {
    document.getElementById('habilidades').style.display = 'block';
});


function mostrar(){
    document.getElementById('obj2').style.display = 'block';
    }