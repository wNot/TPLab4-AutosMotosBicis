function Opciones ()
{
    return(
        <>
        
        <h1>Opciones</h1>
        <h4>Nombre de la Empresa</h4>
        <input></input>
        <h4>Condicion frente al IVA</h4>
        <select id="condiva" name="condiva">
        <option value="Monotributista">Monotributista</option>
        <option value="Responsable inscripto">Responsable inscripto</option>
        <option value="Consumidor final">Consumidor final</option>
        </select><br/>
        <input type="checkbox" id="cond" name="cond" value="Agente de retencion" /> Agente de retencion<br/>
        <input type="checkbox" id="imp" name="imp" value="Importador" /> Importador



        
        </>
    );
}

export default Opciones;