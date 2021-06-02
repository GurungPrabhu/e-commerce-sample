import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  HomePage,
  ProductDetail,
  CheckOut,
  NoPage
} from "../src/components/pages"
import Footer from "./components/templates/footer"
import Header from "./components/templates/header"

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header imageSrc="/logo.png" title="Alienware" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product-detail/:id" component={ProductDetail} />
          <Route exact path="/check-out" component={CheckOut} />
          <Route component={NoPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
