import React from 'react'
import { Drawer, Icon, Button } from 'antd'
// import '../style'
import '../style/detail-setting-resource.scss'

export const DetailSettingResource = ({ visible, onClose }) => {
  
  return (
    <div>
      <Drawer
        closable={false}
        className="fwork-detail-resource"
        placement="right"
        maskStyle={{backgroundColor: 'transparent'}}
        width={576}
        onClose={onClose}
        visible={visible}
      >
        <div className="fwork-custom-header-drawer">
          <span className="fwork-detail-resource-header-title">
            Tài nguyên 01
              </span>
          <div className="fwork-header-action">
            <Icon type="edit" />
            <Icon type="delete" />
            <Icon type="close" onClick={onClose} />
          </div>
        </div>

        <div className="fwork-detail-resource-body">
          <table>
            <tr>
              <th scope="col">
                <Button className="fwork-btn-content-resource" type="link">Thông tin tài nguyên</Button>
              </th>
            </tr>
            <tr>
              <th>Tên tài nguyên:</th>
              <td>Phòng họp 01</td>
            </tr>
            <tr>
              <th>Nhóm tài nguyên:</th>
              <td>Phòng họp</td>
            </tr>
            <tr>
              <th>Đăng kí định kì:</th>
              <td>Có</td>
            </tr>
            <tr>
              <th>Màu sắc:</th>
              <td>
                <div style={{backgroundColor: '#ee5b18'}} className="fwork-color-picked"></div>
              </td>
            </tr>
            <tr>
              <th>Mô tả:</th>
              <td>lorem ... </td>
            </tr>
            <tr>
              <th>Tiện ích:</th>
              <td className="fwork-list-service-tag">
                <div className="fwork-tag">
                  Teabreak
                </div>
                <div className="fwork-tag">
                  Bút viết
                </div>
                <div className="fwork-tag">
                  Rẻ lau
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col">
                <Button
                  className="fwork-btn-content-resource"
                  type="link">Thông tin phê duyệt
                </Button>
              </th>
            </tr>
            <tr>
              <th>Quy trình phê duyệt:</th>
              <td><a>Quy trình phê duyệt 1</a></td>
            </tr>
            <tr>
              <th>Kịch bản thông báo:</th>
              <td><a>Kịch bản thông báo 1</a></td>
            </tr>
            <tr>
              <th>Người quản lí tài nguyên:</th>
              <td>FWoker</td>
            </tr>
            <tr>
              <th>Đơn vị quản lý tài nguyên:</th>
              <td>Ban dự án FWork</td>
            </tr>
            <tr>
              <th>Bộ phận áp dụng:</th>
              <td>Tất cả</td>
            </tr>
          </table>
        </div>
      </Drawer>
    </div>
  )
}
