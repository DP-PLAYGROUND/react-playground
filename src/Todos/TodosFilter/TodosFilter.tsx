import {FunctionComponent} from 'react';
import styles from './TodosFilter.module.scss';

export const TodosFilter: FunctionComponent = () => {
    return (
        <section className={styles.filter}>
            <div className={styles.item}>
                <label htmlFor="search">Search</label>
                <input type="search"
                       id={'search'}/>
            </div>

            <div className={styles.item}>
                <label htmlFor="status">Status</label>
                <select id={'status'}>
                    <option>All</option>
                    <option>Completed</option>
                    <option>Uncompleted</option>
                </select>
            </div>

            <div className={styles.item}>
                <label htmlFor="sort">Sort by</label>
                <select id={'sort'}>
                    <option>Newest</option>
                    <option>Name</option>
                </select>
            </div>
        </section>
    )
}
