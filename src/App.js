import React, { useState } from 'react';
import { Button } from 'antd'
import 'antd/dist/antd.css';

import { DetailSettingResource } from './components/DetailSettingResource'
import Booking from './components/Booking'
import BookingDetail from './components/BookingDetail';
import ConfigNotificationView from './components/ConfigNotificationView'
import ConfigNotificationEdit from './components/ConfigNotificationEdit'
import SetttingProcessView from './components/SetttingProcessView'
import SettingGroupResourceMove from './components/SettingGroupResourceMove'
import './style/index.scss'

function App() {

  const [visible_1, toggle_1] = useState(false)
  const [visible_2, toggle_2] = useState(false)
  const [visible_3, toggle_3] = useState(false)
  const [visible_4, toggle_4] = useState(false)
  const [visible_5, toggle_5] = useState(false)
  const [visible_6, toggle_6] = useState(false)
  const [visible_7, toggle_7] = useState(true)

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', width: 190, marginTop: 60 }}>
        <Button onClick={() => toggle_1(true)}>
          SettingResource
        </Button>
        <Button onClick={() => toggle_2(true)}>
          Booking
        </Button>
        <Button onClick={() => toggle_3(true)}>
          BookingDetail
        </Button>
        <Button onClick={() => toggle_4(true)}>
          06_ConfigNotification_View
        </Button>
        <Button onClick={() => toggle_5(true)}>
          06_ConfigNotification_Edit
        </Button>
        <Button onClick={() => toggle_6(true)}>
          06_SetttingProcessView
        </Button>
        <Button onClick={() => toggle_7(true)}>
          SettingGroupResourceMove
        </Button>
      </div>
      <div>
        <DetailSettingResource onClose={() => toggle_1(false)} visible={visible_1} />
        <Booking onClose={() => toggle_2(false)} visible={visible_2} />
        <BookingDetail onClose={() => toggle_3(false)} visible={visible_3} />
        <ConfigNotificationView onClose={() => toggle_4(false)} visible={visible_4} />
        <ConfigNotificationEdit onClose={() => toggle_5(false)} visible={visible_5} />
        <SetttingProcessView onClose={() => toggle_6(false)} visible={visible_6} />
        <SettingGroupResourceMove onClose={() => toggle_7(false)} visible={visible_7} />
      </div>
    </div>
  );
}

export default App;
