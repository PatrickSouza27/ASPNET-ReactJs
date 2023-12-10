import {Link, Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
        <nav>
           <Link to='/user/cadastrar'>Cadastro</Link> &nbsp;&nbsp;
           <Link to='/user/consultar'>Consulta</Link>
        </nav>
        <main>
           <Outlet />
        </main>
    </div>
  );
}

export default App;
