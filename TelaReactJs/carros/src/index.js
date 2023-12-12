import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ createBrowserRouter, RouterProvider} from 'react-router-dom'
import Produto from './componentes/produto';
import Consulta from './componentes/consulta'
import EditaProduto from './componentes/editaProduto';


const rotas = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      { path:'/carros/cadastrar', element: <Produto />},
      { path:'/carros/consultar', element: <Consulta />},
      { path:'/carros/editar/:idcarro', element: <EditaProduto />}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
);


