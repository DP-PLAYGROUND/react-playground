import {FunctionComponent, useMemo} from 'react';
import {DateTime} from 'luxon';

interface DateProps {
    readonly value: string;
    /**
     * @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens
     */
    readonly format: string;
}

export const Date: FunctionComponent<DateProps> = ({value, format}) => {
    const date = useMemo(() => DateTime.fromISO(value).toFormat(format), [value, format]);

    return (<>{date}</>)
}
