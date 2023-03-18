import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../features/user';

const Users = ({pat}) => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
      fetch(`https://adell.pythonanywhere.com/${id}`, {
        method: 'DELETE',
      },)
  };
  
  useEffect(()=>{
    async function getData(){
      const res = await fetch('https://adell.pythonanywhere.com/js')
      const test  = await res.json()
      setData(test)
    }
    getData()
  },[])

  const dispatch = useDispatch();

  const columns = [
    { field: 'id', headerName:'ID', width: 90 },
    {
      field: 'fname',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lname',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'number',
      headerName: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'cancerType',
      headerName: 'Cancer Type',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
       
            <Link to={`/data/user/${params.row.id}`}>
              <button onClick={()=>{
                dispatch(login({id:params.row.id}))
              }} className="userListEdit">Detail</button>
            </Link>
         
          <DeleteOutlineIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

  
  return (
    <div className="userList" style={{ height: 650, width: '100%' }}>
    <DataGrid
      rows={
        data.filter(e=>{
         return e.fname.toLowerCase().includes(pat) || e.lname.toLowerCase().includes(pat) 
        })
      }
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[8]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  )
}

export default Users