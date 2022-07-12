import {FunctionComponent} from 'react';
import TodoForm from './TodoForm/TodoForm';
import {TodoDraft} from './TodoDraft';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectTodos, todosActions} from './todosSlice';
import TodoView from './TodoView/TodoView';

const Todos: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);

    const onCreate = (todo: TodoDraft) => {
        dispatch(todosActions.add({
            ...todo,
            id: new Date().getTime(),
            createdAt: new Date().toISOString(),
            completed: false
        }));
    }

    return (
        <>
            <h1>Todos</h1>

            <section>
                <TodoForm onSubmit={onCreate}></TodoForm>
            </section>

            <section>
                {todos.map(todo => (
                    <TodoView {...todo} key={todo.id}/>
                ))}
            </section>
        </>
    )
}

export default Todos
