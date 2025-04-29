import AccountDropDown from '@/components/dropdown/AccountDropDown'
import Logo from '@/components/images/Logo'
import HeaderSearch from '@/components/inputs/HeaderSearch'
import common from '@/styles/common.module.css'
import header1 from '@/styles/staff_home_styles/staff_home_header1.module.css'
import { Col, Row } from 'antd'
import React from 'react'
import { BellOutlined } from '@ant-design/icons';

export default function StaffHomeHeader1() {
  return (
    <Row className={header1.staff_header1}>
      <Col sm={3} className={header1.col1}>
        <Logo className={common.home_logo} />
      </Col>
      <Col sm={12} className={header1.col2}>
        <HeaderSearch />
      </Col>
      <Col sm={9} style={{ display: 'flex', justifyContent: 'end' }}>
        <div className='flex justify-center items-center'>
          <BellOutlined className={common.notification_icon} />
        </div>
        <AccountDropDown />
      </Col>
    </Row>
  )
}
