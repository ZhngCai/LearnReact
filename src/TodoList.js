import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from './store/index.js';

/* const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]; */

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }
  render(){
    return (
      <Fragment>
        <div style={{marginTop:"10px",marginLeft:'10px'}}>
          <Input value={this.state.inputValue} placeholder="todo info" style={{width:"300px",marginRight:'10px'}} />
          <Button type="primary">Primary</Button>
        </div>
        <List
          style={{marginTop:"10px",marginLeft:'10px',width:'300px'}}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
        
      </Fragment>
    )
  }
}

export default TodoList;