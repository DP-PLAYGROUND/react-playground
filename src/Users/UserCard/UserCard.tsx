import {FunctionComponent} from 'react';
import {User} from '../../api/users/UsersResponse';
import styles from './UserCard.module.scss'

export const UserCard: FunctionComponent<User> = (props) => {
    return (
        <div className={styles.user}>
            <img src={props.picture.thumbnail}
                 alt={props.name.first}/>
            <p>{props.name.first} {props.name.first}</p>
        </div>
    )
}
