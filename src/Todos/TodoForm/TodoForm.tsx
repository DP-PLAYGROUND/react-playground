import {FormEventHandler, FunctionComponent, useReducer} from 'react';
import {TodoDraft} from '../todosSlice';

interface TodoFormProps {
    readonly initialState?: TodoDraft;
    readonly onSubmit?: (todo: TodoDraft) => void;
}

const TodoForm: FunctionComponent<TodoFormProps> =
    ({
         onSubmit,
         initialState = { title: '', description: ''}
     }) => {
        const [state, dispatch] = useReducer(
            (state: typeof initialState, action: Partial<typeof initialState>) => ({...state, ...action}),
            initialState
        );

        const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
            event.preventDefault();

            onSubmit?.(state);
        }

        return (
            <form onSubmit={handleSubmit}
                  onReset={() => dispatch(initialState)}>
                <div>
                    <input required
                           placeholder={'Title'}
                           value={state.title}
                           onChange={event => dispatch({title: event.target.value})}/>
                </div>

                <div>
                <textarea required
                          placeholder={'Description'}
                          value={state.description}
                          onChange={event => dispatch({description: event.target.value})}/>
                </div>

                <div>
                    <button type={'reset'}>Reset</button>
                    <button type={'submit'}>Submit</button>
                </div>
            </form>
        );
    }

export default TodoForm
