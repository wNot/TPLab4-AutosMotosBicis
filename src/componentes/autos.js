import { useEffect, useState } from "react";
import Datos from "./datos";
import { getAutos } from "./servicios/datos_autos";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';


function Autos ()
{
    const [autos,setAutos] = useState ([]);
    const [modalEditar, setModalEditar] = useState(false);

    const [autoSeleccionado, setAutoSeleccionado] = useState({
        id:  '',
        marca: '',
        modelo: '',
        anio: ''
    });

    const seleccAuto=(elem, caso)=>{
        setAutoSeleccionado(elem);
    }

    useEffect(()=>{
        setAutos(getAutos());
    },[]);

    return(
        <>
        
        <h1>Autos</h1>
        <table className="table table-bordered">
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
                    <td><button className="btn btn-primary">Editar</button></td>
                    <td><button className="btn btn-danger">Eliminar</button></td>
                </tr>
            ))
        }

        </tbody>
        </table>
        </>
    );
    <Modal iOpen={modalEditar}>
        <ModalHeader>
            <div>
                <h3>Editar Autito</h3>
            </div>
        </ModalHeader>
        <ModalBody>
        <div className="form-group">
        <label>ID</label>
        <input className="form-control" readOnly type="text" name="id"/><br/>
        <label>MARCA</label>
        <input className="form-control" type="text" name="marca"/><br/>
        <label>MODELO</label>
        <input className="form-control" type="text" name="modelo"/><br/>
        <label>AÑO</label>
        <input className="form-control" type="text" name="año"/><br/>
        </div>
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-primary"> Guardar </button>
        <button className="btn btn-danger"> Cencelar </button>
        </ModalFooter>
    </Modal>
}

export default Autos;
