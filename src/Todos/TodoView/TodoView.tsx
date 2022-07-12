import {FunctionComponent} from 'react';
import {Todo} from '../todosSlice';

type TodoViewProps = Todo;

const TodoView: FunctionComponent<TodoViewProps> = ({title, description, createdAt}) => {
    return (
        <section>
            <h2>{title}</h2>
            <h1>{description}</h1>
            <span>{createdAt}</span>
        </section>
    );
}

export default TodoView
