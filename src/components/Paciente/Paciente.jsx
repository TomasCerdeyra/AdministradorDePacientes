import React from 'react'

const Paciente = ({ paciente,setPaciente,eliminarPaciente }) => {
    
    const handleEliminar = () =>{
        const respuesta = confirm('Deseas Eliminar este Paciente?');
        
        if (respuesta) {
            eliminarPaciente(paciente.id);
        }
    }
    
    return (
        <>
            <div className='m-3 bg-white shadow-md px-5 py-10  rounded-xl w-full'>
                <p className=' font-bold mb-3 text-gray-800 uppercase'>Nombre:
                    <span className=' font-normal normal-case'> {paciente.nombre}</span>
                </p>

                <p className=' font-bold mb-3 text-gray-800 uppercase'>Propietario:
                    <span className=' font-normal normal-case'> {paciente.propietario}</span>
                </p>

                <p className=' font-bold mb-3 text-gray-800 uppercase'>Email:
                    <span className=' font-normal normal-case'> {paciente.email}</span>
                </p>

                <p className=' font-bold mb-3 text-gray-800 uppercase'>ALTA:
                    <span className=' font-normal normal-case'>{paciente.fecha}</span>
                </p>

                <p className=' font-bold mb-3 text-gray-800 uppercase'>Sintomas:
                    <span className=' font-normal normal-case'>{paciente.sintomas}</span>
                </p>

                <div className='flex justify-between mt-10'>
                    <button
                        type='button'
                        className='py-2 px-10 bg-indigo-600 hover:bg-infigo-700 text-white 
                        font-bold uppercase rounded-lg'
                        onClick={()=> setPaciente(paciente)}
                        >
                        editar
                    </button>
                    <button
                        type='button'
                        className='py-2 px-10 bg-red-600 hover:bg-infigo-700 text-white 
                        font-bold uppercase rounded-lg'
                        onClick={handleEliminar}
                        >
                        eliminar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Paciente