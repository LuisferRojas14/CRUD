// CRUD - Create, Read, Update, Delete

//Global variables

var row = null;

function Enviar(){
    var EntradaDeDato = retrieveData();
    var DatosDeLectura = readingDataFromLocalStorage(EntradaDeDato);
    if(EntradaDeDato == false){
        msg.innerHTML = `<h3 style ="color:red;">por favor ingrese datos</h3>`;
    }else{
        if(row == null){
            insert(DatosDeLectura);
             msg.innerHTML = ` <h3 style ="color:green;">Datos insertados</h3>`;
            }else{
                Actualizar();
                 msg.innerHTML =  `<h3 style ="color:yellow;">Datos actualizados;</h3>`;
            }
    }
    document.getElementById("form").reset();

}
//CREATE
//Recuperando datos del formulario
function retrieveData(){
    var nombre1=document.getElementById("Nombre").value;
    var Trabajo=document.getElementById("Trabajo").value;
    var Experiencia=document.getElementById("Experiencia").value;

    var arr = [nombre1,Trabajo,Experiencia];
    if(arr.includes("")){
        return false;
    }else{
    return arr;
    }
}
//LEER
//Datos en el almacenamiento local
function readingDataFromLocalStorage(EntradaDeDato){
    //Exportar datos al almacenamiento local
    var n = localStorage.setItem("Nombre", EntradaDeDato[0])
    var j = localStorage.setItem("Trabajo", EntradaDeDato[1])
    var e = localStorage.setItem("Experiencia", EntradaDeDato[2])

    //Obtengo valores de local a tabla
    var n1 = localStorage.getItem("Nombre",n);
    var j1 = localStorage.getItem("Trabajo",j);
    var e1 = localStorage.getItem("Experiencia",e);
    var arr=[n1,j1,e1];
    return arr;
}
//INSERTAR
function insert(DatosDeLectura){
var row = table.insertRow();
 row.insertCell(0).innerHTML = DatosDeLectura[0];
 row.insertCell(1).innerHTML = DatosDeLectura[1];
 row.insertCell(2).innerHTML = DatosDeLectura[2];
 row.insertCell(3).innerHTML = `<button onclick = Editar(this)>Editar</button>
 <button onclick = remove(this)>Eliminar</button>`;
}

//EDITAR
function Editar(td){
    row = td.parentElement.parentElement;
    document.getElementById("Nombre").value = row.cells[0].innerHTML;
    document.getElementById("Trabajo").value = row.cells[1].innerHTML;
    document.getElementById("Experiencia").value = row.cells[2].innerHTML;
}

//ACTUALIZAR
function Actualizar(){
    row.cells[0].innerHTML = document.getElementById("Nombre").value;
    row.cells[1].innerHTML = document.getElementById("Trabajo").value;
    row.cells[2].innerHTML = document.getElementById("Experiencia").value;
    row = null;
}


//ELIMINAR
function remove(td){
     var ans = confirm("¿Está seguro que desea eliminar este registro?");
     if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        
     }
   
}
