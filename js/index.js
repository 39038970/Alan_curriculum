document.getElementById("button").addEventListener("click", function(){
    console.log("Capturamos el evento");
document.getElementById("info_adicional1").innerHTML="Lee y Escribe: INGLES, ESPAÑOL, PORTUGUES.";
document.getElementById("info_adicional2").innerHTML="LIDERAZGO E IDEAS INNOVADORAS.";
document.getElementById("info_adicional3").innerHTML="Deportes: FUTBOL, ATLETISMO, NATACION Y PESCA.";
});
document.getElementById("button_ocultar_inf_adic").addEventListener("click",function(){
    document.getElementById("info_adicional1").style.display="none";
    document.getElementById("info_adicional2").style.display="none";
    document.getElementById("info_adicional3").style.display="none";
});