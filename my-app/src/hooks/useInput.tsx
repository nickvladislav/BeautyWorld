import { useState, FormEventHandler } from 'react';

export function useInput<T>(defaultValue: T) {
    const [value, setValue] = useState<T>(); 
    const onChange = (event: FormEventHandler<HTMLFormElement> | any): void => setValue(event.target.value)

    return {
        value,
        onChange
    }
}