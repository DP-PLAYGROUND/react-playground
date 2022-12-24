import {FunctionComponent, useEffect, useMemo} from 'react';
import styles from './Users.module.scss';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectAllUsers, selectTotalUsers, selectUsersIsLoading, usersActions} from './usersSlice';
import {UserCard} from './UserCard/UserCard';
import {useElement} from '../hooks/useElement';

const Users: FunctionComponent = () => {
    const users = useAppSelector(selectAllUsers);

    const appDispatch = useAppDispatch();

    const isLoading = useAppSelector(selectUsersIsLoading);

    const total = useAppSelector(selectTotalUsers);

    const {element: loaderTriggerElement, ref: loaderTriggerRef} = useElement();

    const intersectionObserver = useMemo(() => new IntersectionObserver(
            entries => entries.some(({isIntersecting}) =>
                !isIntersecting) ? null : appDispatch(usersActions.loadMore()),
            {threshold: 1, rootMargin: '200px'}
        ), [appDispatch]
    )

    useEffect(() => {
        if (!loaderTriggerElement) {
            return;
        }

        intersectionObserver.observe(loaderTriggerElement);

        return () => intersectionObserver.disconnect();
    }, [intersectionObserver, loaderTriggerElement])

    return (
        <section>
            <header className={styles.header}>
                <p>Total: {total}</p>
            </header>

            <section className={styles.list}>
                {users.map(user => (
                    <UserCard key={user.login.uuid}
                              {...user}/>
                ))}
            </section>

            <footer className={styles.footer}>
                {isLoading && <div>Loading...</div>}
                <div ref={loaderTriggerRef}></div>
            </footer>
        </section>
    )
}

export default Users
