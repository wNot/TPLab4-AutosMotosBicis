import{Link,Outlet} from "react-router-dom";


function Home ()
{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav me-auto text-light ">
                    <li class="nav-item ">
                    <Link to = "/home" class="nav-link text-decoration-none text-light fw-bold"> HOME</Link>
                    </li>
                    <li class="nav-item">
                    <Link to = "acercade" class="nav-link text-decoration-none text-light"> Acerca de</Link>
                    </li>
                    <li class="nav-item">
                    <Link to = "opciones" class="nav-link text-decoration-none text-light"> Opciones</Link>
                    </li>
                    <li class="nav-item ">
                    <Link to = "datos" class="nav-link text-decoration-none text-light"> Datos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
        
        
        <Outlet></Outlet>
        


        <footer>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom ">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav me-auto text-light">
                    <h1>Footer</h1>
                </ul>
                </div>
            </div>
        </nav>
        </footer>
        </div>






    );
}

export default Home;