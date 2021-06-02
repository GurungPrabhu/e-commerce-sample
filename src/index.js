import "./style/index.scss"
import "font-awesome/css/font-awesome.min.css"
import React from "react"
import ReactDOM from "react-dom"
import { store } from "./redux/store"
import App from "./app"
import { Provider } from "react-redux"
import NotificationProvider from "./components/context/notification.context"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
