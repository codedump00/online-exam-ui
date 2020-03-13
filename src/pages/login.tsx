import React, { ReactElement } from 'react'
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

import './pages.css'

interface Props {

}

export default function LoginPage(): ReactElement {

  const history = useHistory();
  const handlelogin = () => {
    history.push('/exam');

  };

  return (
    <div className="login__page">
      <div className="login__forms">
        <form>
          <h3 className="form__label">Please provide following details!</h3>
          <Input
            placeholder="Enter your username or email"
            prefix={<UserOutlined className="site-form-item-icon" />}

            size="large"
          />
          <Input.Password
            placeholder="Enter your password"
            prefix={<KeyOutlined className="site-form-item-icon" />}
            size="large"
          />
          {/* <Checkbox>Remember Me!</Checkbox> */}
          <Button type="primary" onClick={handlelogin}>Login</Button>

        </form>
      </div>
    </div>
  )
}
// suffix={
            //   <Tooltip title="Extra information">
            //     <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            //   </Tooltip>
            // }