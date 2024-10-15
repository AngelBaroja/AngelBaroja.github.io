let cont = 0;
let imagenes = ["images/carrouse1.jpg",
                "images/carrouse2.jpg",
                "images/carrouse3.jpg",
                "images/carrouse4.jpg",
                "images/carrouse5.jpg",
                "images/carrouse6.jpg",
                "images/carrouse7.jpg",
                "images/carrouse8.jpg",
                ];
document.imagenCarrousel.src = imagenes[0];
let btnAdelante = document.querySelector(".adelante");
let btnAtras = document.querySelector(".atras");
function forward(){
    cont++;
    if(cont > imagenes.length -1){
        cont=0;
    }
    document.imagenCarrousel.src = imagenes[cont];
}
btnAdelante.addEventListener("click",forward);
function back(){
    cont--;
    if(cont < 0){
        cont = imagenes.length -1;
    }
    document.imagenCarrousel.src = imagenes[cont];
}
btnAtras.addEventListener("click",back);

