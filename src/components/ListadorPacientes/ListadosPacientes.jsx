import Paciente from '../Paciente/Paciente'

const ListadosPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 pr-5'>
            {
                pacientes.length === 0 ?
                    (
                        <>
                            <h2 className='font-black text-3xl text-center'>Aun no hay Pacientes</h2>
                            <p className='text-xl mt-5 mb-10 text-center'>
                                Agregue un nuevo paciente
                                <span className='text-indigo-600 font-bold'> y apareceran en este lugar</span>
                            </p>
                        </>

                    )
                    :
                    (<h2 className='font-black text-3xl text-center'>Listados Pacientes</h2>)
            }
            <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus
                <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
            </p>

            {
                pacientes.map(paciente =>
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                )
            }
        </div>
    )
}

export default ListadosPacientes