import React from 'react'
import { Drawer, Icon, Button, Checkbox } from 'antd'
import '../style/confign-notification.scss'

const ConfigNotification = ({ visible, onClose }) => {
  return (
    <div>
      <Drawer
        closable={false}
        className="fwork-confign-notification"
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={576}
        onClose={onClose}
        visible={visible}
      >
        <div className="fwork-custom-header-drawer">
          <span className="fwork-custom-header-drawer-title">
            Kịch bản thông báo 1
              </span>
          <div className="fwork-header-action">
            <Icon type="edit" />
            <Icon type="delete" />
            <Icon type="close" onClick={onClose} />
          </div>
        </div>

        <div className="fwork-confign-notification-body">

          <table>
            <thead style={{ lineHeight: '70px', borderBottom: '2px solid #eaecef'}}>
              <th>Sự kiện</th>
              <th>Thông báo</th>
              <th>Hình thức</th>
            </thead>
            <div style={{height: 16}}></div>
            <tbody>
              <tr>
                <th>
                  Có booking mới được tạo

              </th>
                <td>
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
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
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
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
                  <ul>
                    <li>Người tạo</li>
                  </ul>
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
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
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
                  Quản lý trực tiếp thêm
              </th>
                <td>
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
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
                  Xóa booking
              </th>
                <td>
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
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
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
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
                  Sự kiện chung
              </th>
                <td>
                  <ul>
                    <li>Người tạo</li>
                    <li>Quản lý tài nguyên</li>
                    <li>Quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <Checkbox.Group className="fwork-custom-checkbox fwork-config-notifi-checkbox">
                    <Checkbox value="email">Email</Checkbox>
                    <Checkbox value="system">Hệ thống</Checkbox>
                  </Checkbox.Group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
    </div>
  )
}

export default ConfigNotification
