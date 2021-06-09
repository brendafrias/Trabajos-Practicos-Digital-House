let moduloTareas = require('./tareas');
let process = require ('process');
let comando = process.argv[2];

switch (comando){
    case "listar":
          let tareas = moduloTareas.leerJSON()
            if(tareas.length === 0){
                console.log("Tu lista de tareas esta vacía");

            }else{
                for(let i=0;i<tareas.length;i++)
                {
                console.log("Titulo: " + tareas[i].titulo + " - Estado: " + tareas[i].estado);                 
                }
            }
        break;
    case "agregar":
            let tituloX =process.argv[3];
            let estadoX =process.argv[4];
            moduloTareas.escribirJSON(tituloX,estadoX)
      break;
      case "deshacer":
             moduloTareas.deshacer()
      break; 
      case "filtrar":
             let filtrar = process.argv[3]
             let listaFiltrada =  moduloTareas.filtrarPorEstado(filtrar) 
             for(let i=0;i<listaFiltrada.length;i++)
             {
                console.log(listaFiltrada[i].titulo)
             }
       break;
    case undefined : 
       console.log("Atencion -- Tienes que pasar una accion")
    break;
    default:
       console.log("No entiendo que quieres hacer");
}
