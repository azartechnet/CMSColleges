
function CrudPage()
{
    // ... rest of the code
    return(
        <div className="container">
            <h1>CRUD Page</h1>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Foodname" required/>
                <input type="text" className="form-control" placeholder="Fooddescription" required/>
            </div>
            <button className="btn btn-primary" onClick="">Submit</button>
            <h3 className="mt-4">GetData From DataBase</h3>
            <table className="table table-bordered table-striped">
               <thead className="table-dark">
                 <tr>
                    <th>FoodName</th>
                    <th>Fooddescription</th>
                    <th>Edit</th>
                    <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                <tr>
                    <td>Apple</td>
                    <td>Good</td>
                    <td>
                        <input type="text" className="form-control" placeholder="Update"/>
                        <button className="btn btn-primary" onClick="">Update</button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick="">Delete</button>
                    </td>
                </tr>
               </tbody>
            </table>
        </div>
    )
}
export default CrudPage;