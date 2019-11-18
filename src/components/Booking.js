import React, { useState } from 'react'
import {
  Drawer, Icon, Button,
  Row, Col, Form, Input, Select, Checkbox, Radio,
  DatePicker, TimePicker, Steps, Dropdown
} from 'antd'
import _ from 'lodash'
import '../style/booking.scss'

const Booking = ({ onClose, visible, form }) => {
  const { getFieldDecorator } = form;

  const [typeTime, setTypeTime] = useState(1)
  const [typeTimePeriodic, setTypeTimePeriodic] = useState(3)
  const [daysPicked, setDaysPicked] = useState([12, 13])
  const [visibleSelectDay, setVisibleSelectDay] = useState(false)

  const menu = (
    <div className="fwork-custom-pick-day">
      <ul>
        {_.range(1, 31).map((day, index) => (
          <li
            key={index}
            onClick={() => addDays(day)}
            className={`${daysPicked.includes(day) ? 'active' : ''}`}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  )

  const addDays = (day) => {
    let newDaysPicked = daysPicked.includes(day) ?
      daysPicked.filter(oldDay => oldDay !== day) : [...daysPicked, day]
    setDaysPicked(newDaysPicked)
  }

  let _myTimePicker = () => {
    return (
      <div className="fwork-select-time-box">
        <Row>
          <Col span={12}>
            <span> Ngày bắt đầu</span>
            <DatePicker className="fwork-date-picker"
            />
          </Col>
          <Col span={12}>
            <span> Giờ bắt đầu</span>
            <TimePicker format="HH:mm" use12Hours className="fwork-time-picker"
            />
          </Col>
          <Col span={12}>
            <span> Ngày kết thúc</span>
            <DatePicker className="fwork-date-picker"
            />
          </Col>
          <Col span={12}>
            <span> Giờ kết thúc</span>
            <TimePicker format="HH:mm" use12Hours className="fwork-time-picker"
            />
          </Col>
        </Row>
      </div>
    )
  }

  const renderTime = (key) => {
    switch (key) {

      case 1:
        return (
          <div className="fwork-time-periodic-pick">
            {_myTimePicker()}
          </div>)
      case 2:
        return (
          <div className="fwork-time-periodic-pick">
            (_myTimePicker())
            <div className="fwork-day-repeats">
              <span>Chọn ngày lặp:</span>
              <Checkbox.Group style={{ width: '100%' }}>
                <Checkbox value={2}>Thứ 2</Checkbox>
                <Checkbox value={3}>Thứ 3</Checkbox>
                <Checkbox value={4}>Thứ 4</Checkbox>
                <Checkbox value={5}>Thứ 5</Checkbox>
                <Checkbox value={6}>Thứ 6</Checkbox>
                <Checkbox value={7}>Thứ 7</Checkbox>
                <Checkbox value={8}>CN</Checkbox>
              </Checkbox.Group>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="fwork-time-periodic-pick">
            <Row>
              <Col span={8} className="fwork-month-time-picker">
                <div>
                  <span> Giờ bắt đầu</span>
                  <TimePicker format="HH:mm" placeholder="" use12Hours className="fwork-time-picker" />
                </div>
                <div>
                  <span> Giờ kết thúc</span>
                  <TimePicker format="HH:mm" placeholder="" use12Hours className="fwork-time-picker"
                  />
                </div>
              </Col>
              <Col span={14} offset={2} className="fwork-pick-day-box">
                <div>
                  <Dropdown
                    overlay={menu}
                    // trigger={['click']}
                    onVisibleChange={e => setVisibleSelectDay(e)}
                    visible={visibleSelectDay}
                  >
                    <Button style={{ padding: '0 8px' }}>
                      <Icon type="calendar" />
                    </Button>
                  </Dropdown>
                  <span style={{ marginLeft: 10 }}>Chọn ngày lặp</span>
                </div>
                <div className="fwork-list-day-picked">
                  {daysPicked.sort((a, b) => a - b).map(day =>
                    <div className="fwork-day-picked">{day}</div>
                  )}
                </div>
              </Col>

            </Row>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <div>
      <Drawer
        title="Booking"
        className="fwork-booking-drawer"
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={864}
        onClose={onClose}
        visible={visible}
      >
        <Form layout="vertical" className="fwork-form">
          <div className="fwork-booking-left-content">
            <Button type="link" className="fwork-booking-content-title p-0">
              Thông tin booking
            </Button>
            <Form.Item label="Nhóm tài nguyên">
              {getFieldDecorator('test1', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Select placeholder="Lựa chọn">

                </Select>
              )}
            </Form.Item>
            <Form.Item label="Tài nguyên">
              {getFieldDecorator('test2', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Select placeholder="Lựa chọn">

                </Select>
              )}
            </Form.Item>
            <Form.Item label="Mục đích">
              {getFieldDecorator('test3', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="Tiện ích đính kèm">
              {getFieldDecorator('checkbox-group', {
                initialValue: ['A', 'B'],
              })(
                <Checkbox.Group className="fwork-custom-checkbox" style={{ width: '100%' }}>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="A">A</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C">C</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D">D</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="E">E</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>,
              )}
            </Form.Item>
            <Form.Item label="Mục đích">
              {getFieldDecorator('test4', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input.TextArea rows={2} />
              )}
            </Form.Item>
            <Form.Item label="Thời gian sử dụng">
              {getFieldDecorator('radio-butto', {
                rules: [{ required: true }],
                initialValue: 1
              })(
                <Radio.Group
                  onChange={e => setTypeTime(e.target.value)}
                  className="fwork-choose-time-booking"
                >
                  <div className="fwork-one-time">
                    <Radio value={1}>Book 1 lần</Radio>
                    {typeTime === 1 && _myTimePicker()}
                  </div>
                  <div className="fwork-periodic-box">
                    <div className="fwork-periodic">
                      <Radio value={2}>Book định kì</Radio>
                      <Select
                        className={`${typeTime === 2 ? '' : 'd-none'}`}
                        onChange={e => setTypeTimePeriodic(e)}
                        value={typeTimePeriodic}
                      >
                        <Select.Option value={1}>Hàng Ngày</Select.Option>
                        <Select.Option value={2}>Hàng Tuần</Select.Option>
                        <Select.Option value={3}>Hàng Tháng</Select.Option>
                      </Select>
                    </div>
                    {typeTime === 2 && renderTime(typeTimePeriodic)}

                  </div>
                </Radio.Group>
              )}
            </Form.Item>
            <div className="fwork-footer">
              <Button className="fwork-btn-ok">Tạo booking</Button>
              <Button onClick={onClose} className="fwork-btn-cancel">Huỷ bỏ</Button>
            </div>
          </div>
          <div className="fwork-booking-rigth-content">
            <Button type="link" className="fwork-booking-content-title p-0">
              Thông tin phê duyệt
            </Button>
            <Form.Item label="Quản lý trực tiếp">
              {getFieldDecorator('test6')(
                <Input placeholder="Tag người quản lý trực tiếp" />,
              )}
            </Form.Item>
            <Form.Item label="Người quản lý tài nguyên">
              {getFieldDecorator('test7', {
                initialValue: "KienDT2"
              })(
                <Input readOnly />,
              )}
            </Form.Item>
            <Form.Item label="Bộ phận quản lý tài nguyên">
              {getFieldDecorator('test5', {
                initialValue: "Ban dự án FWork"
              })(
                <Input readOnly placeholder="Tag người quản lý trực tiếp" />,
              )}
            </Form.Item>
            <Button type="link" className="fwork-booking-content-title p-0">
              Quy trình booking
            </Button>
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
        </Form>
      </Drawer>
    </div>
  )
}

const Booking2 = Form.create({
  name: 'booking_form'
})(Booking);

export default Booking2
