import React from 'react'
import {
  Drawer, Icon, Button,
  Row, Col, Form, Input, Select, Checkbox, Radio, Avatar,
  DatePicker, TimePicker, Steps, Dropdown, Tooltip, Tag, Tabs, List, Comment
} from 'antd'
import _ from 'lodash'
import moment from 'moment'
import '../style/booking-detail.scss'

const BookingDetail = ({ visible, onClose }) => {
  return (
    <div>
      <Drawer
        className="fwork-booking-detail-drawer"
        closable={false}
        placement="right"
        maskStyle={{ backgroundColor: 'transparent' }}
        width={864}
        onClose={onClose}
        visible={visible}
      >
        <div className="fwork-custom-header-drawer">
          <span className="fwork-custom-header-drawer-title">
            Mượn phòng họp review tiến độ BA và UX/UI
              </span>
          <div className="fwork-header-action">
            <Icon type="edit" />
            <Icon type="delete" />
            <Icon type="close" onClick={onClose} />
          </div>
        </div>
        <div className="fwork-booking-detail-content">
          <div className="fwork-booking-detail-left-content">
            <div className="fwork-action-top">
              <Button className="fwork-btn-ok">Phê duyệt</Button>
              <Button className="fwork-btn-cancel m-l">Từ chối</Button>
            </div>
            <Button type="link" className="fwork-btn-link">
              Thông tin booking
              </Button>
            <table>
              <tbody>
                <tr>
                  <td>Mã booking:</td>
                  <td>6677028</td>
                </tr>
                <tr>
                  <td>Trạng thái:</td>
                  <td>
                    <Tag color="gold">Chờ phê duyệt</Tag>
                  </td>
                </tr>
              </tbody>

            </table>
            <Tabs defaultActiveKey="1" className="fwork-custom-tabs">
              <Tabs.TabPane tab="Chi tiết" key="1">
                <table>
                  <tbody>
                    <tr>
                      <td>Nguời tạo:</td>
                      <td>QuangPT10</td>
                    </tr>
                    <tr>
                      <td>Tài nguyên sử dụng:</td>
                      <td>
                        Phòng Yangon
                      </td>
                    </tr>
                    <tr>
                      <td>Nhóm tài nguyên:</td>
                      <td>
                        Phòng họp
                      </td>
                    </tr>
                    <tr>
                      <td>Thời gian sử dụng:</td>
                      <td>
                        <ul className="fwork-used-time">
                          <li><span>Từ</span> <span>25/11/2019 08:00</span></li>
                          <li><span>Đến</span> <span>24/10/2019 17:00</span></li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Ghi chú:</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </td>
                    </tr>
                    <tr>
                      <td>Tiện ích:</td>
                      <td className="fwork-list-service-tag">
                        <div className="fwork-tag">Teabreak</div>
                        <div className="fwork-tag">Bút viết</div>
                        <div className="fwork-tag">Rẻ lau</div>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </Tabs.TabPane>
            </Tabs>
            <Tabs defaultActiveKey="1" className="fwork-custom-tabs fwork-footer-booking-detail">
              <Tabs.TabPane tab="Bình luận" key="1" className="fwork-list-comment">
                <Comment
                  author={<span className="fwork-name-author-comment">Quang Pham</span>}
                  avatar={
                    <Avatar
                      size={24}
                      alt="Quang Pham"
                    />
                  }
                  content={
                    <p className="fwork-comment">
                      We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).</p>
                  }
                  datetime={
                    <span className="fwork-time-comment">{moment().locale('vi').fromNow()}</span>
                  }
                />
                {/* <Comment
                  author={<span className="fwork-name-author-comment">Quang Pham</span>}
                  avatar={
                    <Avatar
                      size={24}
                      alt="Quang Pham"
                    />
                  }
                  content={
                    <p className="fwork-comment">
                      We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).</p>
                  }
                  datetime={
                    <span className="fwork-time-comment">{moment().locale('vi').fromNow()}</span>
                  }
                /> */}
                {/* <Comment
                      author={<span className="fwork-name-author-comment">Quang Pham</span>}
                      avatar={
                        <Avatar
                          size={24}
                          alt="Quang Pham"
                        />
                      }
                      content={
                        <p className="fwork-comment">
                          We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).</p>
                      }
                      datetime={
                        <span className="fwork-time-comment">{moment().locale('vi').fromNow()}</span>
                      }
                    /> */}

              </Tabs.TabPane>
              <Tabs.TabPane tab="Hoạt động" key="2">

              </Tabs.TabPane>
            </Tabs>

            <div className="fwork-comment-input">
              <Avatar
                size={24}
                alt="Quang Pham"
              />
              <Input size="small" className="m-l" placeholder="Bình luận" />
            </div>
          </div>

          <div className="fwork-booking-detail-rigth-content">
            <Button type="link" className="fwork-btn-link">
              Quy trình booking
            </Button>
            <Steps
              className="fwork-custom-step color-2"
              direction="vertical"
              size="small" current={1}
            >
              <Steps.Step
                title="Tạo booking"
                description="Hoàn thành"
              />
              <Steps.Step
                title="Quản lý trực tiếp duyệt"
                description="LanPM5 đã phe duyệt"
              />
              <Steps.Step
                title="Quản lý tài nguyên duyệt"
                description="KienDT2 đã phê duyệt"
              />
              <Steps.Step
                title="Hoàn thành"
                description="Booking của bạn đã hoàn thành"
              />
            </Steps>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default BookingDetail
