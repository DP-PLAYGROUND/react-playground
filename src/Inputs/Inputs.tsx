import {FunctionComponent} from 'react';
import {Input} from './Input/Input';
import {InputPassword} from './InputPassword/InputPassword';

const Inputs: FunctionComponent = () => {
    return (
        <>
            <h1>Inputs</h1>
            <Input type={'date'}></Input>
            <InputPassword autoFocus></InputPassword>
        </>
    )
}

export default Inputs;
