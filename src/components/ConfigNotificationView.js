import React from 'react'
import { Drawer, Icon, Button, Checkbox } from 'antd'
import '../style/config-notification.scss'

const ConfigNotificationView = ({ visible, onClose }) => {
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
            Kịch bản thông báo 1
              </span>
          <div className="fwork-header-action">
            <Icon type="edit" />
            <Icon type="delete" />
            <Icon type="close" onClick={onClose} />
          </div>
        </div>

        <div className="fwork-config-notification-body" style={{ paddingTop: 24 }}>
          <div className="fwork-config-notification-desc">
            <p>It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              The point of using.</p>
          </div>

          <Button type="link" className="fwork-btn-link">
            Thiết lập kịch bản
            </Button>
          <table>
            <thead>
              <th>Sự kiện</th>
              <th>Thông báo</th>
              <th>Hình thức</th>
            </thead>
            <div style={{ height: 16 }}></div>
            <tbody>
              <tr>
                <th>
                  Có booking mới được tạo

              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Booking được phê duyệt
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Booking bị từ chối
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Booking được cập nhật
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Cán bộ quản lý trực tiếp thêm
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Xóa booking
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Bình luận trong booking
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>
                  Sự kiện chung
              </th>
                <td>
                  <ul>
                    <li>Người tạo đề xuất</li>
                    <li>Người quản lý tài nguyên</li>
                    <li>Cán bộ quản lý trực tiếp</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Email</li>
                    <li>Hệ thống</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
    </div>
  )
}

export default ConfigNotificationView
