import {FormEventHandler, FunctionComponent, useState} from 'react';
import {Todo} from '../todosSlice';

interface TodoFormProps {
    readonly onSubmit?: (todo: Pick<Todo, 'title' | 'description'>) => void
}

const TodoForm: FunctionComponent<TodoFormProps> = ({onSubmit}) => {
    const [title, setTitle] = useState<Todo['title']>('');
    const [description, setDescription] = useState<Todo['description']>('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();

        onSubmit?.({
            title,
            description
        });

        event.currentTarget.reset();
    }

    const handleReset: FormEventHandler<HTMLFormElement> = () => {
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <section>
                <label htmlFor="title">Title</label><br/>
                <input type="text" id="title" required
                       value={title}
                       onChange={event => setTitle(event.target.value)}/>
            </section>

            <section>
                <label htmlFor="description">Description</label><br/>
                <textarea id="description" required
                          value={description}
                          onChange={event => setDescription(event.target.value)}/>
            </section>

            <section>
                <button type={'reset'}>Reset</button>
                <button type={'submit'}>Submit</button>
            </section>
        </form>
    );
}

export default TodoForm
