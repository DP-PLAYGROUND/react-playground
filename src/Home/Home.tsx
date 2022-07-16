import {FunctionComponent} from 'react';
import styles from './Home.module.scss'

const Home: FunctionComponent = () => {
    return (
        <section className={styles.home}>
            <h1>Playground for React experiments</h1>
        </section>
    );
}

export default Home
