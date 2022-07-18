import {FunctionComponent} from 'react';
import {DateTime} from 'luxon';

interface DateProps {
    /**
     * ISO string
     */
    readonly value: string;
    /**
     * {@link DateTime.toFormat [fmt]}
     */
    readonly format: string;
}

export const DateFormat: FunctionComponent<DateProps> = ({value, format}) => {
    return (<>{DateTime.fromISO(value).toFormat(format)}</>)
}
