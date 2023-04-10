import React, { useReducer, useState } from 'react';

// Definimos la interfaz para el estado del formulario
interface FormState {
    name: string;
    email: string;
}
// Definimos las acciones posibles para el reducer
interface FormAction {
    type: string,
    payload: string
}
const initialState: FormState = {
    name: '',
    email: '',
};
// Función reductora
function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case 'UPDATE_NAME':
            return { ...state, name: action.payload };
        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload };
        case 'RESTART_INPUTS':
            return initialState;
        default:
            return state;
    }
}

const Form: React.FC = () => {
    // Utilizamos el Hook useReducer para gestionar el estado del formulario
    const [state, dispatch] = useReducer(formReducer, initialState);

    // Función para manejar cambios en el campo de nombre
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'UPDATE_NAME', payload: event.target.value });
    };

    // Función para manejar cambios en el campo de correo electrónico
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'UPDATE_EMAIL', payload: event.target.value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch({ type: 'RESTART_INPUTS', payload: ''})
        console.log('Formulario enviado:', state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <br /><br />
            <label>
                Nombre:
                <input
                    type="text"
                    value={state.name}
                    onChange={handleNameChange}
                    required
                />
            </label>
            <label>
                Correo electrónico:
                <input
                    type="email"
                    value={state.email}
                    onChange={handleEmailChange}
                    required
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
