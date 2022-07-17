import {FunctionComponent, useReducer} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectFilteredTodos, todosActions} from './todosSlice';
import {TodosFilter} from './TodosFilter/TodosFilter';
import {TodosFilterParams} from './TodosFilterParams';
import {TodosFilterSortType} from './todos-filter-params/TodosFilterSortType';
import {TodosFilterStatusType} from './todos-filter-params/TodosFilterStatusType';

const Todos: FunctionComponent = () => {
    const appDispatcher = useAppDispatch();

    const onCreate = () => appDispatcher(todosActions.created({title: '', completed: false}));

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
