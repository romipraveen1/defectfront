
import React from 'react';
import { Table, Divider, Tag ,Button} from 'antd';
import {Arrow} from './Arrow1.png';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Priority',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },
  {
    title: 'Icon',
    dataIndex: 'Icon',
    key: 'Icon',
  },
  {
    title: 'Colour',
    key: 'colour',
    dataIndex: 'colour',
   
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
      <Link to="/Edit"><Button type="primary" tag={Link} to={"/Edit" }>
          Edit
        </Button></Link> 
        <Divider type="vertical" />
        <Button type="danger">
          Delete
        </Button>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'High',
    Description: 'High',
    Icon: 'Icon1',
    Colour: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Medium',
    Description: 'Medium',
    Icon: 'Icon2',
    Colour: ['loser'],
  },
  {
    key: '3',
    name: 'Low',
    Description: 'Low',
    Icon: 'Icon3',
    Colour: ['cool', 'teacher'],
  },
];
export default class SiderDemo extends React.Component {
    render(){
        return(

<Table columns={columns} dataSource={data} />
        );
    }
}
