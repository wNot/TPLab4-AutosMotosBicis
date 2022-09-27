import { useEffect, useState } from "react";
import Dgatos from "./datos";
import { getAutos } from "./servicios/datos_autos";

function Autos ()
{
    const [autos,setAutos] = useState ([]);

    useEffect(()=>{
        setAutos(getAutos());
    },[]);

    return(
        <>
        
        <h1>Autos</h1>
        <table>
        <thead>
            <tr>
            <th>
                ID  
            </th>
            <th>
                Marca  
            </th>
            <th>
                Modelo  
            </th>
            <th>
                Año  
            </th>
            </tr>
        </thead>    


        <tbody>
        {
                autos.map((auto,idx) => (

                <tr key={auto.id}>
                    <td>{auto.id}</td>
                    <td>{auto.marca}</td>
                    <td>{auto.modelo}</td>
                    <td>{auto.anio}</td>
                </tr>
            ))
        }

        </tbody>
        </table>
        
        
        </>
    );
}

export default Autos;
