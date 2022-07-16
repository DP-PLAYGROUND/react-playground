import React, {lazy, Suspense} from 'react';
import styles from './App.module.scss';
import {NavLink, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Todos = lazy(() => import('./Todos/Todos'));

function App() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <NavLink to="/" className={
                        ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>Home</NavLink>
                    <NavLink to="/todos" className={
                        ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link
                    }>Todos</NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={
                        <Suspense>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="todos" element={
                        <Suspense>
                            <Todos />
                        </Suspense>
                    } />
                </Routes>
            </main>
        </>
    );
}

export default App;
