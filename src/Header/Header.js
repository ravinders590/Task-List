import React,{useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route,NavLink} from "react-router-dom";
import Table from '../Table/Table';
import FormData from '../FormData/FormData';


const Header = () => {

    const[form_data,setFormData] = useState({
        id:new Date().getTime().toString(),
        task_td:'',
        status:'',
        description:'',
        task_type:'',
        pick_date:new Date(),
    });

    const [createTask, setTask] = useState((localStorage.hasOwnProperty('tasklist') === true) ? JSON.parse(localStorage.getItem('tasklist')) : []);

    const hanldeInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        setFormData({...form_data,[name]:value});
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTask([...createTask,form_data]);
        setFormData({
            id:new Date().getTime().toString(),
            task_td:'',
            status:'',
            description:'',
            task_type:'',
            pick_date:new Date(),
        })
    }
    // Delete Notes
    const DeleteItems = (id)=>{
        const updateUserData = createTask.filter((elem)=>{
        return elem.id!==id
        });
        
        setTask(updateUserData);
    }
    useEffect(() => {
        localStorage.setItem('tasklist',JSON.stringify(createTask));      
    }, [createTask]);

  return (
    <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-white custom-nav">
                <div className="container custom-container">
                    <NavLink className="navbar-brand logo" to="/"><img src='logo.jpg' alt='Logo'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}   aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/tasklist">Features</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        
            <Routes>
                <Route exact path="/" element={<FormData hanldeInput={hanldeInput} handleSubmit={handleSubmit} form_data={form_data} />} />
                <Route exact path="tasklist" element={<Table createTask={createTask} DeleteItems={DeleteItems} />} />
            </Routes>
        </BrowserRouter> 
       
    </>
  )
}

export default Header