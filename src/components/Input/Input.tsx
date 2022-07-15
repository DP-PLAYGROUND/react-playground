import {FunctionComponent, InputHTMLAttributes} from 'react';

export const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({ ...attrs}) => {
    return (<input {...attrs}/>)
}
