import {FunctionComponent, useReducer} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectFilteredTodos, todosActions} from './todosSlice';
import {TodosFilter} from './TodosFilter/TodosFilter';
import {TodosFilterParams} from './TodosFilter/TodosFilterParams';
import {TodosFilterSortType} from './TodosFilter/TodosFilterSortType';
import {TodosFilterStatusType} from './TodosFilter/TodosFilterStatusType';

const Todos: FunctionComponent = () => {
    const appDispatcher = useAppDispatch();

    const onCreate = () => appDispatcher(todosActions.create({title: '', completed: false}));

    const [todosFilterParams, dispatchTodosFilterParams] = useReducer(
        (state: TodosFilterParams, action: Partial<TodosFilterParams>) => ({...state, ...action}),
        {query: '', status: TodosFilterStatusType.all, sort: TodosFilterSortType.newest}
    )

    const todos = useAppSelector(state => selectFilteredTodos(state, todosFilterParams));

    return (
        <>
            <header className={styles.header}>
                <TodosFilter {...todosFilterParams}
                             onChange={dispatchTodosFilterParams}/>

                <button onClick={onCreate}>Create</button>
            </header>

            <section className={styles.todos}>
                <TodosList todos={todos}/>
            </section>
        </>
    )
}

export default Todos
