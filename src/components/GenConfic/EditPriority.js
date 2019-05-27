
import React from 'react';
import { Form, Select, Input, Button ,Divider,Upload,Icon} from 'antd';
import { Link } from 'react-router-dom';


export default  class EditP extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  render() {
    //const { getFieldDecorator } = this.props.form;
    return (
        
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="PriorityName">
        <Input />
        </Form.Item>
        <Form.Item label="Description">
        <Input />
        </Form.Item>
        <Form.Item label="Icon"  >
         
        <Input />
        <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          
        </Form.Item>
       
        <Form.Item label="Colour">
        <Input />
        </Form.Item>
       
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Divider type="vertical" />
         <Link to="/Cancel"> <Button type="primary" htmlType="submit">
            Cancel
          </Button></Link>
        </Form.Item>
      </Form>
    );
  }
}


          