import { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select, Switch, Table, TableColumnProps } from 'antd';
import OrdersApi from '../../common/api/OrdersApi';
import Column from "antd/es/table/Column";
import { CustomerDto, MasterDto, OrderDto, ServiceDto } from "../../common/dto/OrderDto";
import { OrderStatus } from "../../common/dto/enums/OrderStatus";
import { useForm } from "antd/es/form/Form";

const { confirm } = Modal;

interface OrderFormProps {
    order?: OrderDto;
    onCreate: (data: any) => void;
    onEdit: (data: any) => void;
}

function OrdersForm({ order, onCreate, onEdit }: OrderFormProps) {
    const [form] = useForm();
    const isCreateMode = !order;

    const handleSubmit = (data: any) => {
        if (isCreateMode) {
            onCreate(data);
        } else {
            onEdit(data);
        }
    };

    useEffect(() => {
        form.setFieldsValue({
            name: order?.customer?.firstName,
            phone: order?.customer?.phone,
            masterId: order?.master.fullName,
            serviceId: order?.service.name,
        })
    }, [order]);

    return (
        <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="name" label='Имя' required>
                <Input  />
            </Form.Item>

            <Form.Item name="phone" label='Номер телефона' required>
                <Input  />
            </Form.Item>

            <Form.Item name="masterId" label='Мастер'>
                <Select>
                    <Select.Option>Имя</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name="serviceId" label='Услуга'>
                <Select>
                    <Select.Option>Услуга</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name="visitDate" label='Дата записи'>
                <DatePicker />
            </Form.Item>

            <Form.Item>
                <Button type='primary' onClick={form.submit}>
                    {isCreateMode ? 'Добавить': 'Сохранить'}
                </Button>
            </Form.Item>

            <label htmlFor="">
                <div>Телефон</div>
                <input type="text" />
            </label>
        </Form>
    )
}

export function OrdersPage() {
    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [status, setStatus] = useState(OrderStatus.Opened);
    const [editableOrder, setEditableOrder] = useState<OrderDto>();

    const removeOrder = (orderId: number) => {
        confirm({
            title: 'Вы действительно хотите удалить запись?',
            onOk: () => {
                OrdersApi.remove(orderId)
                .then(() => setOrders(orders.filter(o => o.id !== orderId)));
            }
        });
    };

    const create = (data: any) => {
        OrdersApi.create(data)
            .then((createOrder) => setOrders(orders.concat(createOrder)))
    }

    const columns: TableColumnProps<OrderDto>[] = [
        {
            title: 'Дата визита',
            dataIndex: 'visitDate',
            key: 'visitDate',
            render: (dataIndex) => {
                return dataIndex.slice(0, 10)
              }
        },
        {
            title: 'Клиент',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer: CustomerDto) => {
                return customer ? `${customer.fullName}` : ''
            }
        },
        {
            title: 'Номер телефона',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer: CustomerDto) => {
              return customer ? `${customer.phone}` : ''
            }
        },
        {
            title: 'Мастер',
            dataIndex: 'master',
            key: 'master',
            render: (master: MasterDto) => master?.fullName
          },
          {
            title: 'Услуга',
            dataIndex: 'service',
            key: 'service',
            render: (service: ServiceDto) => service?.name
          },
        {
            title: '',
            key: 'actions',
            render: (row) => (<>
                <button onClick={() => setEditableOrder(row)}>edit</button>
                <button onClick={() => removeOrder(row.id)}>remove</button>
            </>)
        },
    ]

    useEffect(() => {
        OrdersApi.getAll(status).then(setOrders);
    }, [status]);

    return (
        <>
            <header>
                <h1>Записи на услугу</h1>

                <Switch checked={status === OrderStatus.Opened} onChange={(checked) => setStatus(checked ? OrderStatus.Opened : OrderStatus.Closed)}/>
            </header>

            <Table columns={columns} dataSource={orders} />

            <OrdersForm order={editableOrder} onCreate={create} onEdit={() => {}} />
            
        </>
    )
};
