import {FunctionComponent} from 'react';
import styles from './Users.module.scss';
import {useAppSelector} from '../store/hooks';
import {selectAllUsers} from './usersSlice';
import {UserCard} from './UserCard/UserCard';

const Users: FunctionComponent = () => {
    const users = useAppSelector(selectAllUsers);

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
