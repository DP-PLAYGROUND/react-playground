import {ChangeEventHandler, FunctionComponent} from 'react';
import styles from './TodosFilter.module.scss';
import {isTodosFilterSortType, todosFilterSortTypes} from './params/TodosFilterSortType';
import {isTodosFilterStatusType, todosFilterStatusTypes} from './params/TodosFilterStatusType';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectTodosFilterParams, todosFilterActions} from './todosFilterSlice';

export const TodosFilter: FunctionComponent = () => {
    const appDispatcher = useAppDispatch();

    const filterParams = useAppSelector(selectTodosFilterParams);

    const handleSortChange: ChangeEventHandler<HTMLSelectElement> = event => {
        const sort = event.target.value;

        if (!isTodosFilterSortType(sort)) {
            return;
        }

        appDispatcher(todosFilterActions.update({sort}));
    }

    const handleStatusChange: ChangeEventHandler<HTMLSelectElement> = event => {
        const status = event.target.value;

        if (!isTodosFilterStatusType(status)) {
            return;
        }

        appDispatcher(todosFilterActions.update({status}))
    }

    return (
        <section className={styles.filter}>
            <div className={styles.item}>
                <label htmlFor="search">Search</label>
                <input type="search"
                       id={'search'}
                       value={filterParams.query}
                       onChange={event => appDispatcher(todosFilterActions.update({ query: event.target.value}))}/>
            </div>

            <div className={styles.item}>
                <label htmlFor="status">Status</label>
                <select id={'status'}
                        value={filterParams.status}
                        onChange={handleStatusChange}>
                    {todosFilterStatusTypes.map(status => (
                        <option key={status}
                                value={status}>{status}</option>
                    ))}
                </select>
            </div>

            <div className={styles.item}>
                <label htmlFor="sort">Sort by</label>
                <select id={'sort'}
                        value={filterParams.sort}
                        onChange={handleSortChange}>
                    {todosFilterSortTypes.map(sort => (
                        <option key={sort}
                                value={sort}>{sort}</option>
                    ))}
                </select>
            </div>

            <div className={styles.item}>
                <button onClick={() => appDispatcher(todosFilterActions.reset())}>Reset</button>
            </div>
        </section>
    )
}
