import {FunctionComponent, useMemo, useReducer} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {createTodo, selectFilteredTodos} from './todosSlice';
import {TodosFilter} from './TodosFilter/TodosFilter';
import {TodosFilterParams} from './TodosFilterParams';
import {TodosFilterSortType} from './todos-filter-params/TodosFilterSortType';
import {TodosFilterStatusType} from './todos-filter-params/TodosFilterStatusType';
import {todosFilterStrategyFactory} from './todosFilterStrategyFactory';

const Todos: FunctionComponent = () => {
    const appDispatcher = useAppDispatch();

    const [todosFilterParams, dispatchTodosFilterParams] = useReducer(
        (state: TodosFilterParams, action: Partial<TodosFilterParams>) => ({...state, ...action}),
        {query: '', status: TodosFilterStatusType.all, sort: TodosFilterSortType.newest}
    );

    const todosFilterStrategy = useMemo(() => todosFilterStrategyFactory(todosFilterParams), [todosFilterParams]);

    const todos = useAppSelector(state => selectFilteredTodos(state, todosFilterStrategy));

    const onCreate = () => appDispatcher(createTodo({title: '', completed: false}));

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
