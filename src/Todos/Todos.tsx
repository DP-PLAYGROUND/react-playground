import {FunctionComponent} from 'react';
import TodoForm from './TodoForm/TodoForm';

const Todos: FunctionComponent = () => {
    return (
        <>
            <h1>Todos</h1>
            <TodoForm onSubmit={event => {
                console.log(event);
            }}></TodoForm>
        </>
    )
}

export default Todos
