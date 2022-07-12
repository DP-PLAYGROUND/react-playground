import {FormEventHandler, FunctionComponent, useState} from 'react';
import {TodoDraft} from '../TodoDraft';

interface TodoFormProps {
    readonly onSubmit?: (todo: TodoDraft) => void
}

const TodoForm: FunctionComponent<TodoFormProps> = ({onSubmit}) => {
    const [title, setTitle] = useState<TodoDraft['title']>('');
    const [description, setDescription] = useState<TodoDraft['description']>('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();

        onSubmit?.({
            title,
            description
        });
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
