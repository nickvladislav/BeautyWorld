import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";

import employeesMock from '../../misc/employeesMock.json';
import { EmployeeCard } from '../../components/EmployeeCard';
import { EmployeeDto } from '../../common/dto/EmployeeDto';
import EmployeesState from './EmployeesState';

function EmployeesPage() {
    const { employees, removeEmployee, setEmployees } = EmployeesState;
    
    useEffect(() => {
        setEmployees(employeesMock as EmployeeDto[]);
      }, []);

    return (
        <>
            <h1>Мастера</h1>

            <div>
                    <div>
                        {employees.map(employee => (
                            <EmployeeCard
                            key={employee.id}
                            onClick={() => removeEmployee(employee.id)}
                            fullName={employee.fullName}
                            photo={employee.photo} />
                        ))}

                        {!employees.length && 'Список пуст'}  
                    </div>
            </div>
        </>
    )
}

export default observer(EmployeesPage);
