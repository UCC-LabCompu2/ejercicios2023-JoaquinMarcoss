/**
 * Permite convertir unidades entre metro, pies, pulgadas y yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {
    //creacion de variables
    let met, pul, pie, yar;
    if(isNaN(valor)){
        //comprobar si el valor ingresado es numerico
        met = " "; 
        pie = " "; 
        yar = " "; 
        pul = " "; 
        alert("El valor ingresado es incorrecto"); 
    }else if(id=="metro"){
        //conversion de metros
        met = valor; 
        yar = 1.09361*valor;
        pul = 39.3701*valor;
        pie = 3.28084*valor;
    }else if(id=="pulgada"){
        //conversion de pulgadas
        pul = valor; 
        yar= 0.0277778*valor;
        met = 0.0254*valor;
        pie = 0.0833333*valor;
    }else if(id=="pie"){
        //conversion de pies
        pie = valor
        yar = 0.333333*valor;
        pul = 12*valor;
        met = 0.304800164592*valor;
    }else if(id=="yarda"){
        //conversion de yardas
        yar = valor; 
        met = 0.9144*valor;
        pul = 36*valor;
        pie = 3*valor;
    }
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_yarda.value = yar;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
}

/**
 * Permite convertir unidades grados a riadianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

function convertirGR(id){
    if(id=="grados"){
        let gr = document.getElementById("grados").value; 
        document.getElementById("radianes").value = gr*Math.PI/180; 
    }else{
        let rad = document.getElementById("radianes").value;  
        document.getElementById("grados").value = rad*180/Math.PI;
    }
}