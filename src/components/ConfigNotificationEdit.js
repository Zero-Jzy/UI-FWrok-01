import React from 'react'
import { Drawer, Icon, Button, Checkbox, Form, Input } from 'antd'
import '../style/config-notification.scss'

const ConfigNotificationEdit2 = ({ visible, onClose, form }) => {

  const { getFieldDecorator } = form;

  return (
    <div>
      <Drawer
        closable={false}
        className="fwork-config-notification"
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={607}
        onClose={onClose}
        visible={visible}
      >
        <div className="fwork-custom-header-drawer">
          <span className="fwork-custom-header-drawer-title">
            Chỉnh sửa kịch bản thông báo
            </span>
          <div className="fwork-header-action">
            <Icon type="close" onClick={onClose} />
          </div>
        </div>

        <div className="fwork-config-notification-body">
          <Button type="link" className="fwork-btn-link">
            Thông tin
            </Button>

          <Form layout="vertical" className="fwork-form">
            <Form.Item label="Nhóm tài nguyên">
              {getFieldDecorator('test1', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="Nhóm tài nguyên">
              {getFieldDecorator('test2', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input.TextArea rows={3} />
              )}
            </Form.Item>
          </Form>

          <Button type="link" className="fwork-btn-link">
            Thiết lập kịch bản
            </Button>
          <table>
            <thead>
              <th>Hoạt động</th>
              <th>Thông báo đến</th>
              <th>Hình thức</th>
            </thead>
            <div style={{ height: 16 }}></div>
            <tbody>
              <tr>
                <th>
                  Có booking mới được tạo

              </th>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="1">Người tạo</Checkbox>
                    <Checkbox value="2">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="3">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
              <tr>
                <th>
                  Booking được phê duyệt
              </th>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="1">Người tạo</Checkbox>
                    <Checkbox value="2">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="3">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
              <tr>
                <th>
                  Booking bị từ chối
              </th>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="1">Người tạo</Checkbox>
                    <Checkbox value="2">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="3">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
              <tr>
                <th>
                  Booking được cập nhật
              </th>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="1">Người tạo</Checkbox>
                    <Checkbox value="2">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="3">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
              {/* <tr>
                <th>
                  Quản lý trực tiếp thêm
              </th>
                <td>
                <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="system">Người tạo</Checkbox>
                    <Checkbox value="email">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="system">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr> */}
              <tr>
                <th>
                  Xóa booking
              </th>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="1">Người tạo</Checkbox>
                    <Checkbox value="2">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="3">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
              <tr>
                <th>
                  Bình luận trong booking
              </th>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="1">Người tạo</Checkbox>
                    <Checkbox value="2">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="3">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
              {/* <tr>
                <th>
                  Sự kiện chung
              </th>
                <td>
                <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="system">Người tạo</Checkbox>
                    <Checkbox value="email">Quản lý tài nguyên</Checkbox>
                    <Checkbox value="system">Quản lý trực tiếp</Checkbox>
                  </Checkbox.Group>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr> */}
            </tbody>
          </table>
          <div className="fwork-footer-drawer">
            <Button className="fwork-btn-ok">Tạo booking</Button>
            <Button onClick={onClose} className="fwork-btn-cancel">Huỷ bỏ</Button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

const ConfigNotificationEdit = Form.create({
  name: 'booking_form'
})(ConfigNotificationEdit2);

export default ConfigNotificationEdit
