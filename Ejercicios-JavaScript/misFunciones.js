/**
 * Permite convertir unidades entre metro, pies, pulgadas y yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {
    //creacion de variables
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace("."); 
    }

    if(isNaN(valor)){
        //comprobar si el valor ingresado es numerico
        met = " "; 
        pie = " "; 
        yar = " "; 
        pul = " "; 
        alert("El valor ingresado es incorrecto"); 
    }else if(id==="metro"){
        //conversion de metros
        met = valor; 
        yar = 1.09361*valor;
        pul = 39.3701*valor;
        pie = 3.28084*valor;
    }else if(id==="pulgada"){
        //conversion de pulgadas
        pul = valor; 
        yar= 0.0277778*valor;
        met = 0.0254*valor;
        pie = 0.0833333*valor;
    }else if(id==="pie"){
        //conversion de pies
        pie = valor
        yar = 0.333333*valor;
        pul = 12*valor;
        met = 0.304800164592*valor;
    }else if(id==="yarda"){
        //conversion de yardas
        yar = valor; 
        met = 0.9144*valor;
        pul = 36*valor;
        pie = 3*valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
}

/**
 * Permite convertir unidades grados a riadianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let convertirGR = (id) =>{
    let gr, rad;
    if(id==="grados"){
        gr = document.getElementById("grados").value; 
        rad = gr*Math.PI/180; 
    }else{
        rad = document.getElementById("radianes").value;  
        gr = rad*180/Math.PI;
    }

    //asignacion final
    document.getElementById("radianes").value = rad; 
    document.getElementById("grados").value = gr; 
}

/**
 * Permite visualizar u ocultar un div dentro de la pagina
 * @method mostrar_ocultar
 * @param {string} valor - Valor asociado a un button en html
 */

let mostrar_ocultar = (valor) =>{
    console.log("El valor enviado a la funcion es: "+valor)
   if(valor==="val_mostrar"){
    document.getElementsByName("unDiv")[0].style.display = "block"; 
   }else{
    document.getElementsByName("unDiv")[0].style.display = "none";
   }
}


/**
 * Suma dos valores ingresados por el usuario
 * @method sumar
 */

let sumar = () =>{
    let num1, num2, res;
    // tarea que pasa si el usuario ingresa una letra 
    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value; 
    res = Number(num1) + Number(num2); 
    document.getElementById("totalS").innerHTML = res; 
}

let generarUrl = () => {
    const dist  = document.getElementById("distancia").value; 
    const unid = document.getElementsByName("unidades")[0].value; 

    console.log("La distacia es:"+dist); 
    console.log("La unidad es:"+unid); 

    const urlComp = 'segundaWeb.html#${dist}#${unid}';
    //const urlComp = "segundaWeb.html#"+dist+"#"+unid;
    window.open(urlComp, "_self"); 
}

let cargarValores = () =>{
    let urlCompleta = window.location.href; 
    urlCompleta = urlCompleta.split("#"); 

    const distancia = urlCompleta[1]; 
    const unidad = urlCompleta[2]; 
    document.getElementById("dist").value = '${distancia} ${unidad}'; 
}

let guardarDatosLS = () =>{
    const dist  = document.getElementById("distancia").value; 
    const unid = document.getElementsByName("unidades")[0].value; 

    localStorage.setItem("distanciaLS", dist); 
    localStorage.setItem("unidadesLS", unid); 
    window.open("web2.html"); 
}

let tomarDatosLS = () =>{
    const cant = localStorage.getItem("dintanciaLS"); 
    const unid = localStorage.getItem("unidadesLS"); 
    document.getElementById("dist").value = '${cant} ${unid}'; 
}

let dibujarCirculoCuadrado = () =>{
    const canvas = document.getElementById("myCanvas"); 
    const ctx = canvas.getContext("2d"); 

    const anchoMax = canvas.width; 
    const alturaMax = canvas.height;

    ctx.beginPath(); 
    ctx.fillStyle = "#851414"; 
    ctx.arc(anchoMax/2,alturaMax/2,100,0,2*Math.PI); 
    ctx.stroke(); 
    ctx.fill(); 
    ctx.closePath(); 

    const margen = 8; 
    ctx.beginPath();
    ctx.fillStyle = "#394554"; 
    ctx.fillRect(0+margen,alturaMax-100-margen,150,100);
    ctx.fill(); 
    ctx.stroke(); 
    ctx.closePath();     
}

let limpiarCanvas = () =>{
    const canvas = document.getElementById("myCanvas"); 
    const ctx = canvas.getContext("2d"); 

    canvas.width = canvas.width; 
}

var bandera; 
let dibujar = () =>{
    const canvas = document.getElementById("myCanvas"); 
    const ctx = canvas.getContext("2d"); 

    let posX = event.clientX; 
    let posY = event.clientY; 

    canvas.onmousedown = function (){bandera = true}; 
    canvas.onmouseup = function (){bandera = false}; 

    if(bandera){
            ctx.fillRect(posX-10,posY-10,5,5); 
            ctx.fill(); 
    }

}

let dibujarCuadriculado = () =>{
    const canvas = document.getElementById("myCanvas"); 
    const ctx = canvas.getContext("2d"); 
    const alturaMax = canvas.height; 
    const anchoMax = canvas.width;
    const paso = 20; 
    let ejeX = -24; 
    let ejeY = -14;
    
    //lineas verticales
    for(let i=paso; i<anchoMax; i+=paso){
        ctx.beginPath(); 
        ctx.moveTo(i,0); 
        ctx.lineTo(i,alturaMax); 
        ctx.strokeStyle = "#333"; 
        ctx.stroke(); 
        ctx.font="10pt Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText( ejeX, i, alturaMax/2);
        ctx.closePath();
        ejeX++; 
    }
    //lineas horizontales
    for(let i=paso; i<alturaMax; i+=paso){
        ctx.beginPath(); 
        ctx.moveTo(0,i); 
        ctx.lineTo(anchoMax,i); 
        ctx.strokeStyle = "#333"; 
        ctx.stroke(); 
        ctx.font="10pt Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText( ejeY, i, anchoMax/2);
        ctx.closePath();
        ejeY++; 
    }

    //ejex
    ctx.beginPath(); 
    ctx.moveTo(0,alturaMax/2); 
    ctx.lineTo(anchoMax,alturaMax/2); 
    ctx.strokeStyle = "#6b0a0a"; 
    ctx.stroke(); 
    ctx.closePath(); 
    //ejey
    ctx.beginPath(); 
    ctx.moveTo(anchoMax/2,0); 
    ctx.lineTo(anchoMax/2,alturaMax); 
    ctx.strokeStyle = "#6b0a0a"; 
    ctx.stroke(); 
    ctx.closePath(); 
}

let dibujarImagen = (posX, posY) =>{
    const canvas = document.getElementById("myCanvas"); 
    const ctx = canvas.getContext("2d"); 

    canvas.width = canvas.width; 
    if(posX<0 || posY<0 || posX>canvas.width || posY>canvas.height){
        abrirDialog(); 
    }else{
        let img; 
        img = new Image(); 
        img.src = "images/auto.png"; 

        img.onload = function(){
        ctx.drawImage(img, posX, posY)  
    }
    }
}

let abrirDialog = () =>{
    const dialog = document.getElementById("myDialog"); 
    dialog.showModal(); 
}

let cerrarDialog = () =>{
    const dialog = document.getElementById("myDialog"); 
    dialog.close(); 
}

var x = 0; 
var dx = 20; 

let animarAuto = () =>{
    const canvas = document.getElementById("myCanvas"); 
    const ctx = canvas.getContext("2d"); 

    let img; 
    img = new Image(); 
    img.src = "images/auto.png"; 

    img.onload = function(){
    canvas.width = canvas.width;     
    ctx.drawImage(img, x, 100);   
   }
   x+=dx; 

   if(x>=canvas.width){
    x=0; 
   }
}

var x=0;
var dx=2;
let animarAuto2 = () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "images/auto.png";

  img.onload = function (){
    canvas.width = canvas.width;
    ctx.drawImage(img, x, 100);
    requestAnimationFrame(animarAuto2);
  }

  if(x>canvas.width){
    x=0;
  }
  x+=dx;
}

let animarNuevo = () => {
  requestAnimationFrame(animarAuto2);
}