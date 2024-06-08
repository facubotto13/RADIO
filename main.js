function mostrar_equipo(){
    document.getElementById('nuestro_equipo').style.transform = 'translateX(-215%)';
    document.getElementById('qs1').style.display = 'none';
    document.getElementById('qs2').style.display = 'block';
}


function ocultar_equipo(){
    document.getElementById('nuestro_equipo').style.transform = 'translateX(-300rem)';
    document.getElementById('qs1').style.display = 'block';
    document.getElementById('qs2').style.display = 'none';
}  


function mostrar_programas(){
    document.getElementById('nuestros_programas').style.transform = 'translateX(160%)';
    document.getElementById('p1').style.display = 'none';
    document.getElementById('p2').style.display = 'block';
}  


function ocultar_programas(){
    document.getElementById('nuestros_programas').style.transform = 'translateX(300rem)';
    document.getElementById('p1').style.display = 'block';
    document.getElementById('p2').style.display = 'none';
}  

