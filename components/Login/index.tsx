import { NextPage } from 'next'
import styles from './index.module.scss'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Timer from '../Timer'

export type LoginOnCloseEventHandler = () => void

interface Props {
  show: boolean
  onClose: LoginOnCloseEventHandler
}

const Login: NextPage<Props> = ({ show, onClose }) => {
  const [form, setForm] = useState({
    phone: '',
    verification: ''
  })
  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(false)

  const handleClose: MouseEventHandler = () => {
    onClose?.()
  }

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleGetVerificationCode: MouseEventHandler = () => {
    setIsTimerVisible(true)
  }

  const handleTimeout = (): void => {
    setIsTimerVisible(false)
  }

  const handleLogin: MouseEventHandler = () => {}

  const handleOAuth: MouseEventHandler = () => {}

  return show ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>Login Via Mobile</div>
          <div
            className={styles.close}
            onClick={handleClose}
          >
            x
          </div>
        </div>
        <input
          type="text"
          name={'phone'}
          placeholder={'Please input mobile number'}
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            type="text"
            name={'verification'}
            placeholder={'Please input verification code'}
            value={form.verification}
            onChange={handleFormChange}
          />
          <span
            className={styles.verifyCode}
            onClick={handleGetVerificationCode}
          >
            {isTimerVisible ? (
              <Timer
                time={10}
                onTimeout={handleTimeout}
              />
            ) : (
              'Get Code'
            )}
          </span>
        </div>
        <div
          className={styles.loginBtn}
          onClick={handleLogin}
        >
          Login
        </div>
        <div
          className={styles.otherLogin}
          onClick={handleOAuth}
        >
          Login Via GitHub
        </div>
        <div className={styles.loginPrivacy}>
          Agree with
          <a
            href="https://moco.imooc.com/privacy.html"
            target="_blank"
            rel="noreferrer"
          >
            Privacy and Policy
          </a>
        </div>
      </div>
    </div>
  ) : null
}

export default Login
