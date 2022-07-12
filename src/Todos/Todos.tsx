import {FunctionComponent, useState} from 'react';
import TodoForm from './TodoForm/TodoForm';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectTodos, TodoDraft, todosActions} from './todosSlice';
import TodoView from './TodoView/TodoView';
import Modal from '../shared/Modal/Modal';

const Todos: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);

    const [todoCreationVisible, setTodoCreationVisible] = useState(false);

    const onCreate = (todo: TodoDraft) => {
        setTodoCreationVisible(false);

        dispatch(todosActions.added({
            ...todo,
            id: new Date().getTime(),
            createdAt: new Date().toISOString()
        }));
    }

    const onRemove = (id: number) => {
        dispatch(todosActions.removed(id))
    };

    return (
        <>
            <h1>Todos</h1>

            <button onClick={() => setTodoCreationVisible(true)}>Create</button>

            {todoCreationVisible && <Modal onBackdropClick={() => setTodoCreationVisible(false)}>
                <TodoForm onSubmit={onCreate}></TodoForm>
            </Modal>}

            <section>
                {todos.map(todo => (
                    <section key={todo.id}>
                        <TodoView {...todo}/>
                        <button onClick={() => onRemove(todo.id)}>Remove</button>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Todos
