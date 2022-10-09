import React, { useEffect, useState } from 'react';
import ErrorStringVacio from '../Errores/Errores';

const Formulario = ({ pacientes, SetPacientes, paciente, setPaciente }) => {

    //Estados del form
    const [nombre, SetNombre] = useState('');
    const [propietario, Setpropietario] = useState('');
    const [email, SetEmail] = useState('');
    const [fecha, SetFecha] = useState('');
    const [sintomas, SetSintomas] = useState('');

    //Estado de error
    const [error, SetError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            //Reiniciar form
            SetNombre(paciente.nombre);
            Setpropietario(paciente.propietario);
            SetEmail(paciente.email);
            SetFecha(paciente.fecha);
            SetSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now.toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion del form(si algun estado no incluye nada)
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            SetError(true);
            return;
        }

        SetError(false);

        //objeto de Pacientes
        const obejetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if (paciente.id) {
            obejetoPaciente.id = paciente.id;

            //Por cada paciente en el arreglo veo si tiene el mismo id que el de paciente 
            const pacientesEditados = pacientes.map(pacienteState =>
                //si el paciente tiene el mismo id retorno el objetoPaciente sino el paciente sin editar
                pacienteState.id === paciente.id ? obejetoPaciente : pacienteState
            )
            SetPacientes(pacientesEditados);
            setPaciente({});
        } else {
            //Si no se esta editando agrego un nuevo paciente
            obejetoPaciente.id = generarId();
            SetPacientes([...pacientes, obejetoPaciente]);
        }

        //Reiniciar form
        SetNombre('');
        Setpropietario('');
        SetEmail('');
        SetFecha('');
        SetSintomas('');
    }


    return (
        <div className='md:w-1/2  lg:w-2/5 px-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y
                <span className=' text-indigo-600 font-bold'> Administralos</span>
            </p>


            <form onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

                {error && <ErrorStringVacio mensaje='Todos los campos son obligatorios' />}
                <div className=' mb-5'>
                    <label htmlFor='mascota' className=' block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className=' border-2 p-2 mt-2 w-full rounded-md'
                        value={nombre}
                        onChange={(e) => SetNombre(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='propietario' className=' block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre de la Propietario'
                        className=' border-2 p-2 mt-2 w-full rounded-md'
                        value={propietario}
                        onChange={(e) => Setpropietario(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='email' className=' block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email Propietario'
                        className=' border-2 p-2 mt-2 w-full rounded-md'
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='alta' className=' block text-gray-700 uppercase font-bold'>
                        Fecha
                    </label>
                    <input
                        id='alta'
                        type="date"
                        className=' border-2 p-2 mt-2 w-full rounded-md'
                        value={fecha}
                        onChange={(e) => SetFecha(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='sintomas' className=' block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        placeholder='Describe los sintomas'
                        className=' border-2 p-2 mt-2 w-full rounded-md'
                        value={sintomas}
                        onChange={(e) => SetSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white font-bold uppercase 
                    hover:bg-indigo-700 transition-all'
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario