import {FunctionComponent} from 'react';
import styles from './Todos.module.scss'
import {TodosList} from './TodosList/TodosList';

const Todos: FunctionComponent = () => {
    return (
        <section className={styles.todos}>
            <TodosList todos={[]}/>
        </section>
    )
}

export default Todos
