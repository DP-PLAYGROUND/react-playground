import {FunctionComponent, InputHTMLAttributes, ReactElement} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly prefixRef?: ReactElement;
}

export const Input: FunctionComponent<InputProps> = ({prefixRef, ...attrs}) => {
    return (
        <section>
            <input {...attrs}/>
            {prefixRef && <div>{prefixRef}</div>}
        </section>
    )
}
