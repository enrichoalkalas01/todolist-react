    import MainLayouts from "./layouts/MainLayouts"
    import ListComponent from "./components/ListComponent"
    import CreateTodo from "./components/CreateTodo"

    import { useSelector, useDispatch } from 'react-redux'
    import { useEffect } from "react"
    import { deleteTodoList, addCheckListTodoList, updateTodoList } from "./redux/reducers/Todo"

    const App = () => {
        const TodoListData = useSelector(state => state.Todo.TodoList)
        const dispatch = useDispatch()

        // Hooks untuk componentDidMount
        useEffect(() => {
            
        }, [])

        // Hooks untuk componentDidUpdate
        useEffect(() => {
            console.log(TodoListData)
        }, [TodoListData])

        // Custom Function
        const DeleteData = (id) => {
            let newDataTodo = [] // variable untuk menampung data baru yang difilter dari map
            TodoListData.map(e => { if ( e.id !== id ) newDataTodo.push(e) }) // filter data, selain data yang id nya sama, di masukan ke variable baru
            dispatch(deleteTodoList(newDataTodo)) // update data redux todolist
        }

        const CheckListData = (id, statusChecked) => {
            let newDataTodo = [] // variable untuk menampung data baru yang difilter dari map
            let getFilteredDataById = TodoListData.filter(e => { if ( e.id === id ) return e }) // filter data by selected id
            TodoListData.map(e => { if ( e.id !== id ) newDataTodo.push(e) }) // filter data by not selected id, then put in new variable data for data passing

            // karena redux tidak mengizinkan secara langsung untuk merubah data nya, maka kita buat data yang baru sesuai dengan data yang sudah di filter by selected id
            let changeDataById = {
                id: id,
                value: getFilteredDataById[0].value,
                checkStatus: statusChecked,
            }

            newDataTodo.push(changeDataById) // tambahkan data baru tersebut kedalam variable yang sudah di filter tanpa ada selected data by id
            dispatch(addCheckListTodoList(newDataTodo)) // passing data to the redux for update
        }

        const EditListData = (id, fullData, editValueData) => {
            let newDataTodo = []
            TodoListData.map(e => { if ( e.id !== id ) newDataTodo.push(e) })

            let newDataPassing = {
                id: fullData.id,
                value: editValueData,
                checkStatus: fullData.checkStatus
            }

            newDataTodo.push(newDataPassing)
            dispatch(updateTodoList(newDataTodo))
        }

        return(
            <>
                <MainLayouts>
                    <section className="row input-todo">
                        <div className="col-12 title-box py-4 text-center">
                            <h1>What's you gonna do now ?</h1>
                        </div>
                        <CreateTodo />
                    </section>

                    <section className="row list-todo py-4">
                        {
                            TodoListData.map((e, i) => {
                                return(
                                    <ListComponent
                                        key={ i }
                                        valueData={ e.value }
                                        idData={ e.id }
                                        deleteBtn={ DeleteData }
                                        checkedBtn={ CheckListData }
                                        fullData={ e }
                                        editBtn={ EditListData }
                                    />
                                )
                            })
                        }
                    </section>
                </MainLayouts>
            </>
        )
    }

    export default App