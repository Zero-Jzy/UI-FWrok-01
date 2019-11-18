import React from 'react'
import { Drawer, Icon, Button, Steps } from 'antd'

const SetttingProcessView = ({ visible, onClose }) => {
  return (
    <div>
      <Drawer
        closable={false}
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={607}
        onClose={onClose}
        visible={visible}
      >
        <div className="fwork-custom-header-drawer">
          <span className="fwork-custom-header-drawer-title">
            Quy trình phê duyệt 1
              </span>
          <div className="fwork-header-action">
            <Icon type="edit" />
            <Icon type="delete" />
            <Icon type="close" onClick={onClose} />
          </div>
        </div>
        <div className="fwork-custom-body-drawer">
          <h3 className="fwork-sub-title">
            Quy trình phê duyệt
          </h3>
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
      </Drawer>
    </div>
  )
}

export default SetttingProcessView
