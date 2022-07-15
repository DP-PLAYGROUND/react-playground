import {FunctionComponent, useState} from 'react';
import TodoForm from './TodoForm/TodoForm';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectTodos, Todo, TodoDraft, todosActions} from './todosSlice';
import TodoView from './TodoView/TodoView';
import Modal from '../components/Modal/Modal';

const Todos: FunctionComponent = () => {
    const appDispatch = useAppDispatch();

    const todos = useAppSelector(selectTodos);

    const [creation, setCreation] = useState(false);

    const [editableTodo, setEditableTodo] = useState<Todo | null>(null);

    const onCreate = (todo: TodoDraft) => {
        setCreation(false);

        appDispatch(todosActions.create(todo));
    }

    const onRemove = (id:  Todo['id']) => {
        appDispatch(todosActions.remove(id))
    };

    const onEdit = (id: Todo['id'], todo: TodoDraft) => {
        setEditableTodo(null);

        appDispatch(todosActions.edit({id, todo}))
    }

    const onToggleCompletion = (id:  Todo['id']) => {
        appDispatch(todosActions.toggleCompletion(id))
    };

    return (
        <>
            <button onClick={() => setCreation(true)}>Create</button>

            {creation && <Modal onBackdropClick={() => setCreation(false)}>
                <TodoForm onSubmit={onCreate}></TodoForm>
            </Modal>}

            {editableTodo && <Modal onBackdropClick={() => setEditableTodo(null)}>
                <TodoForm initialState={editableTodo}
                          onSubmit={event => onEdit(editableTodo?.id, event)}></TodoForm>
            </Modal>}

            <section>
                {todos.map(todo => (
                    <section key={todo.id}>
                        <TodoView {...todo}/>
                        <button onClick={() => onRemove(todo.id)}>Remove</button>
                        <button onClick={() => setEditableTodo(todo)}>Edit</button>
                        <button onClick={() => onToggleCompletion(todo.id)}>
                            {todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
                        </button>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Todos
