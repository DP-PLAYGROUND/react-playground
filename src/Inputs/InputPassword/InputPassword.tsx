import {Input, InputProps} from '../Input/Input';
import {FunctionComponent, InputHTMLAttributes, useState} from 'react';

export const InputPassword: FunctionComponent<Omit<InputProps, 'prefixRef' | 'type'>> = (attrs) => {
    const [type, setType] = useState<InputHTMLAttributes<HTMLInputElement>['type']>('password');

    const toggleType = () => type === 'password' ? setType('text') : setType('password');

    return (
        <Input {...attrs}
               type={type}
               prefixRef={(
                   <div>
                <span onClick={toggleType}>
                    {type === 'password' ? 'show' : 'hide'}
                </span>
                   </div>
               )}/>
    )
}
