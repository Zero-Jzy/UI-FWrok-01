import React, {useState, useEffect} from 'react'
import { Drawer, Icon, Transfer } from 'antd'
import _ from 'lodash'
import '../style/move-resource.scss'

const SettingGroupResourceMove = ({ visible, onClose }) => {

  const [state, setData] = useState({mockData: [], targetKeys: []})
  
  useEffect(() => {
    getMock()
  },[])

  let getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }


    setData({mockData, targetKeys: []})
    // setTargetKeys(targetKeys)
  }

  let filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  let handleChange = targetKeys => {
    setData({mockData: [ ...state.mockData], targetKeys})
  };

  let handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  return (
    <div>
      <Drawer
        title="Chuyển tài nguyên"
        className="fwork-move-resource-drawer"
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={576}
        onClose={onClose}
        visible={visible}
      >

        <Transfer
        className="fwork-tranfer-custom"
          dataSource={state.mockData}
          titles={null}
          showSearch
          filterOption={filterOption}
          targetKeys={state.targetKeys}
          onChange={handleChange}
          onSearch={handleSearch}
          render={item => item.title}
        >

          
        </Transfer>

      </Drawer>
    </div>
  )
}

export default SettingGroupResourceMove
