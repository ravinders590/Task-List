import React from 'react'


const FormData = ({hanldeInput,handleSubmit,form_data}) => {

  return (
    <>
        <section className='form-entry'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 m-auto'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                
                                <input  id="task" className="form-control" name='task_td' type="text" placeholder="Task Id" onChange={hanldeInput} value={form_data.task_td} />
                            </div>
                            <div className='form-group mb-3'>
                                
                                <select id='status' className="form-select" name='status' onChange={hanldeInput} value={form_data.status}>
                                    <option value='' >Choose Status</option>
                                    <option value='active' >Active</option>
                                    <option value='progress' >in progress</option>
                                    <option value='resolved' >resolved</option>
                                </select>
                            </div>
                            <div className='form-group mb-3'>
                            
                            <textarea placeholder='Description' name='description' className="form-control" rows="4" cols="10" onChange={hanldeInput} value={form_data.description}></textarea>
                            </div>
                            <div className='form-group mb-3'>
                                
                                <select id='task_type' className="form-select" name='task_type' onChange={hanldeInput} value={form_data.task_type}>
                                <option value='' >Choose Task Type</option>
                                    <option value='UI development' >UI development</option>
                                    <option value='Bug' >Bug</option>
                                    <option value='Component creation' >Component creation</option>
                                </select>
                            </div>
                            <div className='form-group mb-3'>
                                
                                <input  id="date" className="form-control" name='pick_date' type="date" placeholder="Date" value={form_data.pick_date} onChange={hanldeInput}/>
                            </div>
                            <div className='form-group'>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FormData