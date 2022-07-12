import {FunctionComponent} from 'react';
import {Todo} from '../todosSlice';

type TodoViewProps = Todo;

const TodoView: FunctionComponent<TodoViewProps> = ({title, description, createdAt}) => {
    return (
        <section>
            <h2>Title: {title}</h2>
            <h1>Description: {description}</h1>
            <span>Created at: {createdAt}</span>
        </section>
    );
}

export default TodoView
