import React from "react";
import { Input, Button, List } from 'antd';
import ReactCarousel from './ReactCarousel';
import MaterialCarousel from './MaterialCarousel';

function AppUi(props) {
  const { inputValue, handleInputChange, handleBtnClick, list, handleItemDelete } = props;
  return (
    <div style={{
      margin: 10,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Input
          placeholder="todo info"
          style={{
            marginRight: 10,
            width: 300,
          }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          type="primary"
          onClick={handleBtnClick}
        >提交</Button>
      </div>
      <List
        style={{
          width: 300,
          marginTop: 10,
        }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
      {/* 测试轮播插件库 */}
      <ReactCarousel />
      <MaterialCarousel />
    </div>
  )
}

export default AppUi;