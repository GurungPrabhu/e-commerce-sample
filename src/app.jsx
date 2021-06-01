import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HomePage, ProductDetail, CheckOut } from "./components/pages"

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="./Check-out" component={CheckOut} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
