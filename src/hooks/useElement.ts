import {useCallback, useState} from 'react';

export const useElement = <T extends Element>() => {
    const [element, setElement] = useState<T | null>();

    const ref = useCallback((element: T | null) => setElement(element), []);

    return [element, ref];
}
