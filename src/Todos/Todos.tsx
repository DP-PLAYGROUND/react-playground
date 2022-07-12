import {FunctionComponent} from 'react';
import TodoForm from './TodoForm/TodoForm';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectTodos, TodoDraft, todosActions} from './todosSlice';
import TodoView from './TodoView/TodoView';

const Todos: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);

    const onCreate = (todo: TodoDraft) => {
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

            <section>
                <TodoForm onSubmit={onCreate}></TodoForm>
            </section>

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
