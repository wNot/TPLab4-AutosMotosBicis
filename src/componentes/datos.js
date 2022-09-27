import{Link,Outlet} from "react-router-dom";

function Datos ()
{
    return(


        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#"><Link to = "autos"> Autos</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to = "motos"> Motos</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to = "bicicletas"> Bicicletas</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        <Outlet></Outlet>
        
        </div>
    );
}

export default Datos;