import { makeAutoObservable } from "mobx"
import { EmployeeDto } from "../../common/dto/EmployeeDto";

class EmployeesState {
    employees: EmployeeDto[] = [];

    constructor() {
        makeAutoObservable(this, undefined, { autoBind: true });
    }

    setEmployees(data: EmployeeDto[]){
        this.employees = data;  
    }

    removeEmployee(id: number) {
        this.employees = this.employees.filter(e => e.id !== id);
    }
}

export default new EmployeesState();
