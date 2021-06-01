import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HomePage, ProductDetail, CheckOut } from "./components/pages"
import Header from "./components/templates/header"

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header imageSrc="/logo.png" title="Alienware" />
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
