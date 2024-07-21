import React, { useCallback, useEffect, useState } from 'react'
import { apiGetUser } from '../../apis/user'
import { roles } from '../../ultils/constant'
import moment from 'moment'
import InputField from '../../components/InputField'
import useDebounce from '../../hooks/useDebounce'
import { useForm } from 'react-hook-form'
import Select  from '../../components/Select'
import Button from '../../components/Button'
const UsersPage = () => {
  const {handleSubmit, register, formState: {errors}} = useForm({
    status:''
  })
  const [users, setUsers] = useState(null)
  const [queries, setQueries] = useState({
    q: ""
  })
  const [editElm, setEditElm] = useState(null)
  // const [params] = useS
  const fetchUsers = async (params) =>{
    const response = await apiGetUser(params)
    
    if (response.success) setUsers(response)
  }
  // cứ sau 0.8s sẽ gọi api
  const queriesDebounce = useDebounce(queries.q, 800)
  useEffect(() =>{
    const params = {}
    if (queriesDebounce) params.q = queriesDebounce
    fetchUsers(params)
  },[queriesDebounce])
  const handleUpdate = (data) =>{
    console.log(data)
  }
  
  
  return (
    <>
    <div className="flex justify-between m-5">
        <h1 className="text-2xl font-bold">User list</h1>
        
        <div className="flex">
          
              <InputField
              nameKey={'q'}
              value={queries.q}
              setValue={setQueries}
              placeholder='Search name or mail user...'
              isHideLabel
              />
           
        </div>
      </div>
    <div>
      <div className="overflow-x-auto bg-white mx-2">
        <div className = 'flex jusify-end py-4'>
         
          {/* <button className="btn btn-primary">Add new user</button> */}
        </div>
        <form onSubmit={handleSubmit(handleUpdate)} >
          {/* {editElm && <button type='submit' className="btn btn-primary">Add new user</button>} */}
          {/* {editElm && <Button type='submit'>Update</Button>} */}
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email address</th>
                <th>Fullname</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.users?.map((el, idx) =>(
                
                  <tr key = {el._id}>
                    <th>{idx+1}</th>
                    <th>{el.email}</th>
                    <th>{`${el.lastname} ${el.firstname}`}</th>
                    <th>{roles.find(role => +role.code === +el.role)?.value}</th>
                    <th>{el.mobile}</th>
                    <th>{editElm?._id === el._id ? <Select /> : <span>{el.isBlocked ? 'Blocked' : 'Active'}</span>}</th>
                    <th>{moment(el.createdAt).format('DD/MM/YYYY')}</th>
                    <td>
                      <span onClick={() => setEditElm(el)} className='px-2 text-orange-600 hover:underline cursor-pointer'>Edit</span>
                      <span className='px-2 text-orange-600 hover:underline cursor-pointer'>Delete</span>
                    </td>
                  </tr>
                
                
              ))}
              

            </tbody>
          </table>
        </form>
        
      </div>
    </div>
  </>
  )
}

export default UsersPage
