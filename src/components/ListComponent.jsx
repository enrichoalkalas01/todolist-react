import { useEffect, useState } from "react"

const ListComponent = ({ valueData, idData, fullData, deleteBtn, checkedBtn, editBtn }) => {
    const [showEdit, setShowEdit] = useState(false)
    const [editValue, setEditValue] = useState(valueData)
    
    useEffect(() => { }, [showEdit, fullData, valueData, editValue])

    const EditButton = () => { setShowEdit(!showEdit) }

    return(
        <>
            <div className="col-12 list mb-3">
                <div className="row card py-2 d-flex" style={{ flexDirection: 'unset', alignItems: 'center' }}>
                    <div className="col-1" style={{
                        flexDirection: 'unset',
                        alignItems: 'center', height: '100%',
                        justifyContent: 'center'
                    }}>
                        <input
                            className="form-check-input w-100 m-0"
                            type="checkbox"
                            defaultValue={ valueData }
                            defaultChecked={ fullData.checkStatus }
                            id={ `checklist-` + idData }
                            style={{ margin: 0, height: '30px' }}
                            name={ `checklist-name-` + idData }
                            onChange={ (e) => checkedBtn(idData, e.currentTarget.checked) }
                        />
                    </div>
                    <div className="col-8">
                        <div className={ showEdit ? "value-box d-none" : "value-box" }>
                            <span style={ fullData.checkStatus ? { textDecoration: 'line-through #252525' } : {} }>{ valueData }</span>
                        </div>
                        <div className={ showEdit ? "edit-box d-flex" : "edit-box d-none" }>
                            <input
                                defaultValue={ editValue }
                                onChange={ e => setEditValue(e.currentTarget.value) }
                                id={ "edit-value-todo" + idData }
                                className="form-control me-2"
                            />
                            <button onClick={ () => {
                                editBtn(idData, fullData, editValue),
                                EditButton()
                            } } className="btn btn-success">Save</button>
                        </div>
                    </div>
                    <div className="col-3" style={{
                        display: 'flex',
                        flexDirection: 'unset',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <button onClick={ EditButton } className="btn btn-secondary me-2">Edit</button>
                        <button onClick={ () => deleteBtn(idData) } className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListComponent