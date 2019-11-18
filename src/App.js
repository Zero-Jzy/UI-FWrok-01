import React, { useState } from 'react';
import { Button } from 'antd'
import 'antd/dist/antd.css';

import { DetailSettingResource } from './components/DetailSettingResource'
import Booking from './components/Booking'
import ConfigNotification from './components/ConfigNotification'
import BookingDetail from './components/BookingDetail';
import './style/index.scss'

function App() {

  const [visible_1, toggle_1] = useState(false)
  const [visible_2, toggle_2] = useState(false)
  const [visible_3, toggle_3] = useState(false)
  const [visible_4, toggle_4] = useState(true)

  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column', width: 150, marginTop: 60}}>
        <Button onClick={() => toggle_1(true)}>
          SettingResource
        </Button>
        <Button onClick={() => toggle_2(true)}>
          Booking
        </Button>
        <Button onClick={() => toggle_3(true)}>
          ConfigNotification
        </Button>
        <Button onClick={() => toggle_4(true)}>
          BookingDetail
        </Button>
      </div>
      <div>
        <DetailSettingResource onClose={() => toggle_1(false)} visible={visible_1} />
        <Booking onClose={() => toggle_2(false)} visible={visible_2} />
        <ConfigNotification onClose={() => toggle_3(false)} visible={visible_3} />
        <BookingDetail onClose={() => toggle_4(false)} visible={visible_4} />
      </div>

    </div>
  );
}

export default App;
