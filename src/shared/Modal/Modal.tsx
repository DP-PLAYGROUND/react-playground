import {FunctionComponent, PropsWithChildren} from 'react';
import {createPortal} from 'react-dom';
import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
    readonly onBackdropClick?: () => void
}

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({children, onBackdropClick}) => {
    return createPortal(
        <section>
            <section className={styles.backdrop} onClick={onBackdropClick}></section>
            <section className={styles.overlay}>
                {children}
            </section>
        </section>
        , modalRoot);
}

export default Modal;
