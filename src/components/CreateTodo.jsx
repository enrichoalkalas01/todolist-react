import { useDispatch } from 'react-redux'
import { createTodoList } from '../redux/reducers/Todo'

// this function for making uniq id
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const CreateTodo = () => {
    // Usedispatch for send data like a props to the global state
    const dispatch = useDispatch()

    // Function for create todo list data
    const CreateTodoBtn = (event) => {
        // If keyboard enter or add button clicked, do insert data to the redux
        if ( event.type === 'click' || ( event.type === 'keydown' && event.key === 'Enter' ) ) {

            // get value from input
            const InputTodo = document.querySelector("#input-create-todo").value

            // create structure data passing
            let todoData = {
                id: makeid(25),
                value: InputTodo,
                checkStatus: false,
            }

            // passing data to the redux function or reducers
            dispatch(createTodoList(todoData))
        }
    }

    return(
        <>
            <div className="col-12 input-box d-flex">
                <input onKeyDown={ CreateTodoBtn } className="form-control me-2" id="input-create-todo"/>
                <button onClick={ CreateTodoBtn } className="btn btn-primary">Add</button>
            </div>
        </>
    )
}

export default CreateTodo