import {FunctionComponent} from 'react';
import {Todo} from '../todosSlice';

type TodoViewProps = Pick<Todo, 'title' | 'description' | 'createdAt' | 'editedAt'>;

const TodoView: FunctionComponent<TodoViewProps> = ({title, description, createdAt, editedAt}) => {
    return (
        <section>
            <h1>Title: {title}</h1>
            <h1>Description: {description}</h1>
            <h1>Created at: {createdAt}</h1>
            {editedAt && <h1>Edited at: {editedAt}</h1>}
        </section>
    );
}

export default TodoView
