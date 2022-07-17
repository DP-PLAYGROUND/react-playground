import {FunctionComponent} from 'react';

interface DateTimeProps {
    readonly dateTime: Date | string | number;
}

export const DateTime: FunctionComponent<DateTimeProps> = ({dateTime}) => {
    return (
        <>{dateTime}</>
    )
}
