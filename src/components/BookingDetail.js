import React from 'react'
import {
  Drawer, Icon, Button,
  Row, Col, Form, Input, Select, Checkbox, Radio,
  DatePicker, TimePicker, Steps, Dropdown
} from 'antd'
import _ from 'lodash'
import '../style/booking-detail.scss'

const BookingDetail = ({ visible, onClose }) => {
  return (
    <div>
      <Drawer
        title="Mượn phòng họp review tiến độ BA và UX/UI"
        className="fwork-booking-detail-drawer"
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={864}
        onClose={onClose}
        visible={visible}
      >
        <div className="fwork-booking-detail-content">
          <div className="fwork-booking-detail-left-content"></div>
          <div className="fwork-booking-detail-rigth-content">
            <Steps className="fwork-custom-step" direction="vertical" size="small" current={0}>
              <Steps.Step
                title="Tạo booking"
                description="Điền đầy đủ thông tin bắt buộc."
              />
              <Steps.Step
                title="Quản lý trực tiếp duyệt"
                description="Quản lý trực tiếp sẽ phê duyệt booking."
              />
              <Steps.Step
                title="Quản lý tài nguyên duyệt"
                description="Người quản lý tài nguyên phê duyệt booking."
              />
              <Steps.Step
                title="Hoàn thành"
                description="Booking của bạn đã hoàn thành."
              />
            </Steps>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default BookingDetail
