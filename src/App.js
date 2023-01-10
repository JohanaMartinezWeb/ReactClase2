import './App.css';
import Propiedades from './components/Propiedades';
import Tarjeta from './components/Tarjeta';
import Title from './components/Title';

import Lista from './components/Lista';
import Section from './components/Section';
import Contact from './components/Contact';


function App() {
  const LISTA = [
    {id: 1, titulo: 'Título uno'},
    {id: 2, titulo: 'Título dos'},
    {id: 3, titulo: 'Título tres'},
  ]
  const string = "Contenido dinámico"

  
  return (
    <div className="App">
        <Title title="Este es el título"/>
        <Tarjeta/>
        <Propiedades
          cadena="Hola, soy una cadena"
          numero={33}
          booleano={true ? "Verdadero" : "Falso"}
          arreglo={[1,2,3,4]}
          objeto={{
              nombre: "Academia",
              apellido: "Numen",
          }}
          funcion={() => 3 * 4}
          elementoJSX={<p>Hola, soy un párrafo</p>}
          componenteReact={<Contact/>}
        />
        <Lista lista={LISTA}/>
          <Section>{string}</Section>
          <Section>Soy una seccion</Section>
    </div>
  );
}

export default App;
