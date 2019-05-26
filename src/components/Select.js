import React from 'react';
import { Select, Icon, Divider,Modal, Button  } from 'antd';

const Option = Select.Option;
export default class Selects extends React.Component {
    state = { visible: false };
    showModal = () => {
        console.log("ok")
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
render(){
    return(
        <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ padding: '8px', cursor: 'pointer' }}>
            <Button type="primary" onClick={this.showModal}>
            Add item
        </Button> 
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
            </div>
           
          </div>
        )}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
    
    
);
}
}