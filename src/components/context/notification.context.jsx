import React, { useContext } from "react"
import { useState } from "react"
import Notification from "../elements/notification"
import PropTypes from "prop-types"

const NotificationContext = React.createContext()

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    type: ""
  })
  const [visible, setVisible] = useState(false)
  const handleSetNotification = (message, type) => {
    setVisible(true)
    setNotification({ message, type })
  }

  return (
    <NotificationContext.Provider value={[handleSetNotification]}>
      <Notification
        message={notification.message}
        type={notification.type}
        isOpen={visible}
        onClose={setVisible}
      />
      {children}
    </NotificationContext.Provider>
  )
}

const useNotification = () => useContext(NotificationContext)
NotificationProvider.propTypes = {
  children: PropTypes.any.isRequired
}
export default NotificationProvider
export { useNotification }
