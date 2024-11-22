import { useState, useEffect } from "react";
import { buscarUsuario } from "../../../services/servicioUsuario.js";
export function ListadoUsuarios(){
    
    const[datosApi, setDatosApi]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    

    useEffect(function(){
        //Aca se llama al sevicio(back)
        buscarUsuario()
        .then(function(respuestaBack){
            //console.log(respuestaBack)
            setDatosApi(respuestaBack)
            setEstadoCarga(false)
            
        })           
}, [])
     if(estadoCarga==true){
        return(
            <>
            <h3>Estamos Cargando</h3>
            </>
            
        )
     }else{

        return(
            <>
    <br /><br /><br />
            <h3> LISTADO DE USUARIOS</h3>
            <div className="container">
                <div className="row row cols-1 row-cols-md-3 g-3">
                {
                //Renderizando un arreglo de objetos
                datosApi.map(function(usuario){
                    return(
                        <div className="col">
                            <div className="card h-100 shadow p-5">
                                <h5>Nombre: {usuario.nombre}</h5>
                                <h4>Apellido: {usuario.apellido}</h4>
                                <h4>Ciudad: {usuario.ciudad}</h4>
                                <h3>Telefono: {usuario.telefono}</h3>
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </div>
            </>
            )
     }
}