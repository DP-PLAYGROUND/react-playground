import {ChangeEventHandler, FunctionComponent} from 'react';
import styles from './TodosFilter.module.scss';
import {TodosFilterParams} from '../TodosFilterParams';
import {isTodosFilterSortType, todosFilterSortTypes} from '../todos-filter-params/TodosFilterSortType';
import {isTodosFilterStatusType, todosFilterStatusTypes} from '../todos-filter-params/TodosFilterStatusType';

export interface TodosFilterProps extends TodosFilterParams {
    readonly onChange?: (changes: Partial<TodosFilterParams>) => void
    readonly onReset?: () => void
}

export const TodosFilter: FunctionComponent<TodosFilterProps> =
    ({
         query,
         sort,
         status,
         onReset,
         onChange
     }) => {
        const handleSortChange: ChangeEventHandler<HTMLSelectElement> = event => {
            const sort = event.target.value;

            if (!isTodosFilterSortType(sort)) {
                return;
            }

            onChange?.({sort});
        }

        const handleStatusChange: ChangeEventHandler<HTMLSelectElement> = event => {
            const status = event.target.value;

            if (!isTodosFilterStatusType(status)) {
                return;
            }

            onChange?.({ status });
        }

        return (
            <section className={styles.filter}>
                <div className={styles.item}>
                    <label htmlFor="search">Search</label>
                    <input type="search"
                           id={'search'}
                           value={query}
                           onChange={event => onChange?.({ query: event.target.value})}/>
                </div>

                <div className={styles.item}>
                    <label htmlFor="status">Status</label>
                    <select id={'status'}
                            value={status}
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
                            value={sort}
                            onChange={handleSortChange}>
                        {todosFilterSortTypes.map(sort => (
                            <option key={sort}
                                    value={sort}>{sort}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.item}>
                    <button onClick={onReset}>Reset</button>
                </div>
            </section>
        )
    }
