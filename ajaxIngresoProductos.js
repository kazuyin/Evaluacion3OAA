let lista=[];


function ingresar(){
  let prod=document.getElementById('prod').value;
  while (!/^[a-z]+$/.test(prod)) {
    alert("Ingresa solo texto en el cuadro Producto.");
    document.getElementById("prod").value.focus();
    }
  let vun=document.getElementById('vun').value;
  while (!/^[0-9]+$/.test(vun)) {
    alert("Ingresa solo numeros en el cuadro Valor unitario.");
    document.getElementById("vun").value.focus();
    }
  let can=document.getElementById('can').value;
  while (!/^[0-9]+$/.test(can)) {
    alert("Ingresa solo números en el cuadro Cantidad.");
    document.getElementById("can").value.focus();
    }
  let ele=new obj(prod, vun, can);
  lista.push(ele);
  alert("Producto ingresado exitosamente");
  limpiar();
}

  function obj(producto, valor, cantidad){
        this.producto=producto;
        this.valor=valor;
        this.cantidad=cantidad;
        this.total=function(){
          let res=parseInt(this.valor)*parseInt(this.cantidad);
          return res;
        }
  
  }



function calcular(){
  obj.prototype.ivva=function(){
     let valIva=this.total()*0.19;
     return valIva;
  };
  let sumaiva=0;
  let sumatotal=0;
  let valorTotal=0;
  for(var i=0;i<lista.length;i++){
    sumaiva+=lista[i].ivva();
    sumatotal+=lista[i].total();
  }
  valorTotal=sumatotal+sumaiva;
  let txt="";
  //for(var i=0;i<lista.length;i++){
    txt+="<tr><td>"+sumatotal+
          "</td><td>"+sumaiva+
          "</td><td>"+valorTotal+"</td>";
  //}
  txt+="</tr>";
  document.getElementById('demo2').innerHTML=txt;
  if (valorTotal>30000) {
    document.getElementById('cupon').innerHTML="gano cupon 'yolo90'"
  }else if (valorTotal>15000) {
    document.getElementById('cupon').innerHTML="gano cupon 'chi50'"
  }else if (valorTotal>8000) {
    document.getElementById('cupon').innerHTML="gano cupon 'gato30'"
  }else if (valorTotal>5000) {
    document.getElementById('cupon').innerHTML="gano cupon 'gana20'"
  }else if (valorTotal>3000) {
    document.getElementById('cupon').innerHTML="gano cupon 'bit10'"
  }
  //let txt="bruto: "+sumatotal+"<br>";
  //      txt+="iva: "+sumaiva+"<br>";
  //      txt+="neto: "+neto+"<br>";
  //document.getElementById('demo2').innerHTML=txt;
  
}


function mostrar(){
        let contenido="";
        for (var i = 0; i <lista.length; i++) {
            contenido+= "<tr><td>"+(i+1)+ "</td><td>"+lista[i].producto+
                        "</td><td>"+lista[i].valor+
                        "</td><td>"+lista[i].cantidad+
                        "</td>";
        }
        contenido+="</tr>";
        document.getElementById('muestra').innerHTML=contenido;
    }
function limpiar(){
    document.getElementById('prod').value="";
    document.getElementById('vun').value="";
    document.getElementById('can').value="";
    document.getElementById('prod').focus();
}

function borrar(){

  let nombreResta = document.getElementById("delete").value
  alert(nombreResta)
 
    for( var i = 0; i < lista.length; i++){ 
          alert(lista[i].producto)
        if (nombreResta == lista[i].producto) { 
            lista.splice(i, 1); 
        }
   
    } 
    mostrar()
}


function generarDescuento(){
  
let valorOcupon=document.getElementById("descu").value;
if (valorOcupon=="gana20") {
  valorOcupon=20
}else if (valorOcupon=="chi50") {
  valorOcupon=50
}else if (valorOcupon=="gato30") {
  valorOcupon=30
}else if (valorOcupon=="yolo90") {
  valorOcupon=90
}else if (valorOcupon=="bit10") {
  valorOcupon=10
}else{
  alert("cupon no valido")
  valorOcupon=document.getElementById("descu").value=""
  valorOcupon=document.getElementById("descu").value.focus();
}
let cuponDescuento = parseInt(valorOcupon)
let sumaiva=0;
let sumatotal=0;
let granTotal=0;
let aDescontar=0;

for (var i = 0; i <lista.length; i++) {
  sumaiva+=lista[i].ivva();
          
  sumatotal+=lista[i].total();
}
granTotal=sumatotal+sumaiva;
aDescontar=granTotal*(cuponDescuento/100);
let tf=granTotal-aDescontar;
let text="<table class='table table-striped' 'table color= blue'>";
text+="<tr><td>descuento del "+cuponDescuento+"%</td><td>$"+aDescontar+"</td></tr>";
text+="<tr><td>total final:</td><td>$"+tf+"</td></tr>";
text+="</table>"
document.getElementById("mostrarDescuento").innerHTML=text;
}

function boom () {
  
  let nombreResta = document.getElementById("nombreResta").value;
   while (!/^[a-z]+$/.test(nombreResta)) {
  alert("Ingresa solo texto en el cuadro Nombre item a restar cantidad.");
  document.getElementById("nombreResta").value.focus();
  }
  let sacar =parseInt(document.getElementById("sacar").value);
 /*  while (!/^[0-9]+$/.test(sacar) || sacar>cantidad) {

    if (sacar>cantidad) {
      alert("Ingresa solo numeros en el cuadro Cantidad a restar");
    }else{
      alert("El numero ingresado no debe superar el de stock");
    }
  document.getElementById("sacar").value.focus();
  }   */  
  alert(nombreResta)
  alert(sacar)
  var resta=0;
  for (var i = 0; i < lista.length; i++) {
      if(nombreResta == lista[i].producto && lista[i].cantidad >= sacar){
        resta= parseInt(lista[i].cantidad)- parseInt(sacar);
        lista[i].cantidad= parseInt(resta);
      }
      mostrar()      
  }
}   
