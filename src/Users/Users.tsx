import {FunctionComponent, useEffect} from 'react';
import styles from './Users.module.scss';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectAllUsers, usersActions} from './usersSlice';
import {UserCard} from './UserCard/UserCard';

const Users: FunctionComponent = () => {
    const users = useAppSelector(selectAllUsers);

    const appDispatch = useAppDispatch();

    useEffect(() => {
        appDispatch(usersActions.loadMore());
    }, [appDispatch])

    return (
        <section className={styles.list}>
            {users.map(user => (
                <UserCard key={user.login.uuid}
                          {...user}/>
            ))}
        </section>
    )
}

export default Users
