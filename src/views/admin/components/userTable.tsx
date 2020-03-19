import React, { ReactElement } from 'react'
import { Table } from 'antd';
import {
  DeleteFilled,
  EditFilled,
  PlusOutlined
} from '@ant-design/icons';

interface Props {

}

export default function UserTable({ }: Props): ReactElement {
  const dataSource = [
    {
      key: '1',
      name: 'Ashish Kafle',
      email: 'blazinasis@gmail.com',
      mobileNo: '9999999999',
      password: 'skjfoih29ue2e',
      timestamp: '2020-02-07 18:00:00'
    },
    {
      key: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      mobileNo: '9999999999',
      password: 'skjfoih29ue2e',
      timestamp: '2020-02-07 18:00:00'
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobileNo',
      key: 'mobileNo',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: <PlusOutlined />,
      key: 'action',
      render: (text: any, record: any) => <span>
        <DeleteFilled />
        <EditFilled />
      </span>
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />
}
