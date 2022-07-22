import {FunctionComponent} from 'react';
import styles from './DrawingPalette.module.scss';

export const DrawingPalette: FunctionComponent = () => {
    return (
        <canvas className={styles.palette}></canvas>
    )
}
