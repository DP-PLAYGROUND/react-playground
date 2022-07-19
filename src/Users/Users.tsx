import {FunctionComponent, useEffect, useMemo, useRef} from 'react';
import styles from './Users.module.scss';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectAllUsers, selectTotalUsers, selectUsersIsLoading, usersActions} from './usersSlice';
import {UserCard} from './UserCard/UserCard';

const Users: FunctionComponent = () => {
    const users = useAppSelector(selectAllUsers);

    const appDispatch = useAppDispatch();

    const isLoading = useAppSelector(selectUsersIsLoading);

    const total = useAppSelector(selectTotalUsers);

    const loaderTrigger = useRef<HTMLDivElement>(null);

    const intersectionObserver = useMemo(() => new IntersectionObserver(entries =>  {
        if (entries.some(({isIntersecting}) => !isIntersecting)) {
            return;
        }

        appDispatch(usersActions.loadMore());
    }, {
        threshold: 1
    }), [appDispatch])

    useEffect(() => {
        const { current } = loaderTrigger;

        if (!current) {
            return;
        }

        intersectionObserver.observe(current);

        return () => {
            intersectionObserver.disconnect();
        }
    }, [intersectionObserver])

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
                {isLoading ? <div>Loading...</div> : <div ref={loaderTrigger}></div>}
            </footer>
        </section>
    )
}

export default Users
