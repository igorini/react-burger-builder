import React, { useEffect } from 'react'
import Layout from 'hoc/Layout/Layout'
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder'
import Checkout from 'containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from 'containers/Orders/Orders'
import Auth from 'containers/Auth/Auth'
import Logout from 'containers/Auth/Logout/Logout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'containers/Auth/authSlice'
import { withRouter } from 'react-router'

const App = ({ initAuth }) => {
  useEffect(() => {
    initAuth()
  }, [initAuth])

  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  const { initAuth } = bindActionCreators(actions, dispatch)
  return { initAuth }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
