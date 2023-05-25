const MainLayouts = ({ children }) => {
    return(
        <>
            <section id="todo-list" className="container">
                <div className="row">
                    <div className="col-12">
                        { children }
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainLayouts