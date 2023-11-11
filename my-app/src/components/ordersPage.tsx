import { useState, useEffect } from "react";
import { Form, Input, Select, DatePicker } from 'antd'; 

function OrderForm() {
    
    return (
        <Form>
             <Form.Item name='name' label='Имя'>
                <Input />
            </Form.Item>

            <Form.Item name='phone' label='Номер телефона'>
                <Input />
            </Form.Item>

            <Form.Item name='masterId' label='Мастер'>
                <Select>
                    <Select.Option>Имя</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name='serviceId' label='Услуга'>
                <Select>
                    <Select.Option>Имя</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name='visitDate' label='Дата записи'>
                <DatePicker />
            </Form.Item>
        </Form>
    )
}
// import { format } from "path";

// export function OrdersPage() {
//     const [orders, setOrders] = useState();

//     useEffect(() => {
//         OrdersApi.getAll().then(setOrders);
//     }, []);
    
//     return (
//         <>
//         <h1>Запись</h1>

//         <OrderForm />
//         </>
//     )
// }

// import { Table }  from 'antd'

// const dataOrders = [ 
//     {
//         id: 1,
//         clientName: 'Ivan',
//         clientPhone: 987432,
//         mastersId: 1,
//         serviceId: 1,
//         datePicker: 1
//     },

//     {
//         id: 2,
//         clientName: 'Her',
//         clientPhone: 13213546,
//         mastersId: 2,
//         serviceId: 2,
//         datePicker: 2
//     },

//     {
//         id: 3,
//         clientName: 'XYI',
//         clientPhone: 123456,
//         mastersId: 3,
//         serviceId: 3,
//         datePicker: 3
//     },
// ]

// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'clientName',
//         key: 'clientName',
//     },
    
//     {
//         title: 'Phone',
//         dataIndex: 'clientPhone',
//         key: 'clientPhone',
//     },
   
//     {
//         title: 'Masters',
//         dataIndex: 'mastersId',
//         key: 'mastersId',
//     },
    
//     {
//         title: 'Service',
//         dataIndex: 'serviceId',
//         key: 'serviceId',
//     },
    
//     {
//         title: 'Data',
//         dataIndex: 'datePicker',
//         key: 'datePicker',
//     },
// ]

// const _Table = () => {
//     return (
//         <Table 
//         dataSource={dataOrders}
//         columns={columns}
//         />
//     )
// }

// export default _Table
