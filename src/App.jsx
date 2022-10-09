import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListadosPacientes from './components/ListadorPacientes/ListadosPacientes'

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //Hooks
  const [pacientes, SetPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    SetPacientes(pacientesActualizados);
  }


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);


  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario
          SetPacientes={SetPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadosPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App
