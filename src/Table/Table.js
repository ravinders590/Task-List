import React,{useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Table = ({createTask,DeleteItems}) => {

  return (
    <>
    <section className='show-data'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="table-responsive">
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                            <th scope="col" className='text-center'>ID</th>
                            <th scope="col" className='text-center'>Task ID</th>
                            <th scope="col" className='text-center'>Status</th>
                            <th scope="col" className='text-center w-25'>Description</th>
                            <th scope="col" className='text-center'>Task Type</th>
                            <th scope="col" className='text-center'>Date</th>
                            <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              
                              createTask.map(function(currElem,index){
                                
                                const {id,task_td,status,description,task_type,pick_date} = currElem;
                                
                                let i = index + 1;
                                let status_text = '';
                                if(status === 'active'){
                                    status_text = 'text-success';
                                }else if(status === 'progress'){
                                    status_text = 'text-warning';
                                }else if(status === 'resolved'){
                                    status_text = 'text-success';
                                }
                                return <tr key={id} id={id}>
                                    <td className='text-center'>{i}</td>
                                    <td className='text-center'>{task_td}</td>
                                    <td className={`text-center ${status_text}`}>{status}</td>
                                    <td className='text-center'>{description}</td>
                                    <td className='text-center'>{task_type}</td>
                                    <td className='text-center'>{pick_date}</td>
                                    <td className='text-center'>
                                        <a href="#" className='text-danger' onClick={()=>DeleteItems(id)}><DeleteIcon/></a>                    
                                    </td>
                                </tr>
                              })
                          }
                        </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Table