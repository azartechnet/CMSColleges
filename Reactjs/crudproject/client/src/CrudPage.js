import React, { useState } from 'react';
import Axios from 'axios';

function CrudPage() {
    const [foodName, setFoodName] = useState("");
    const [description, setDescription] = useState("");

    const addFoodData = () => {
        Axios.post("http://localhost:3001/insert", { foodName, description })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("There was an error inserting the data!", error);
            });
    };

    return (
        <div className="container">
            <h1>CRUD Page</h1>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Food Name" 
                    required 
                    onChange={(e) => setFoodName(e.target.value)} 
                />
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Food Description" 
                    required 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <button className="btn btn-primary" onClick={addFoodData}>Submit</button>

            <h3 className="mt-4">Get Data From Database</h3>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Food Name</th>
                        <th>Food Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Apple</td>
                        <td>Good</td>
                        <td>
                            <input type="text" className="form-control" placeholder="Update" />
                            <button className="btn btn-primary">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CrudPage;
