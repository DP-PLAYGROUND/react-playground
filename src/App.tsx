import React, {lazy, Suspense} from 'react';
import './App.scss';
import {Link, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Todos = lazy(() => import('./Todos/Todos'));

function App() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>/
                    <Link to="/todos">Todos</Link>
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
