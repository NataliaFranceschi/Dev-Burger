import React, { useEffect, useState, useContext} from 'react'
import devBurgerContext from '../context/devBurgerContext'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Table from '../components/Table'
import '../styles/home.scss';
import '../styles/form.scss';
import devBurgerFetch from '../axios/config'


function Employee() {
  const { setEmployee, employee, update, setChange,
   change, token, setUpdate } = useContext(devBurgerContext)
  const [employees, setEmployees] = useState([]); 
  
  const getEmployee = async () => {
    try {
      const response = await devBurgerFetch.get('/employee');
      const { data } = response;

      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployee()
    setUpdate(false)
    setEmployee({ name:'', email:'', password:'', positionHeld:''});
  }, [change])

  const create = async () => {
    try {
      await devBurgerFetch.post('/employee', employee, 
        {headers: {Authorization: token.token}});
        setChange(!change)

    } catch (error) {
      console.log(error);
    }
  };

  const edit = async () => {
    const { id:_id, ...employeeWithoutId} = employee;
    
    try {
      await devBurgerFetch.put(`/employee/${employee.id}`, employeeWithoutId, 
        {headers: {Authorization: token.token}});
      setChange(!change)
      
    } catch (error) {
      console.log(error);
    }
  };

  if (employees.length && token.positionHeld === "Manager"){
    return (
      <div>
          <Header />
        <div className='home'>
          <Nav />
          <div className='employee'>
            <form>
              <input 
                type='text' 
                placeholder='Name'
                value={employee.name} 
                onChange={ ({target}) => setEmployee({...employee, name: target.value}) }/>
              <input 
                type='email' 
                placeholder='Email' 
                value={employee.email} 
                onChange={ ({target}) => setEmployee({...employee, email: target.value}) }/>
              <input 
                type='password' 
                placeholder='Password'
                value={employee.password} 
                onChange={ ({target}) => setEmployee({...employee, password: target.value}) }/>
              <input 
                type='text' 
                placeholder='Position Held' 
                value={employee.positionHeld} 
                onChange={ ({target}) => setEmployee({...employee, positionHeld: target.value}) }/>
                {(update)?<button type='button' onClick={edit}>Edit</button>
                :<button type='button' onClick={create}>Create</button>}
            </form>
            <Table title={'Employees'} array={employees}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Employee