import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actions } from 'containers/Auth/authSlice'

const Logout = ({ logout }) => {
  useEffect(() => {
    logout()
  }, [logout])

  return <Redirect to="/" />
}

const mapDispatchToProps = (dispatch) => {
  const { logout } = bindActionCreators(actions, dispatch)
  return { logout }
}

export default connect(null, mapDispatchToProps)(Logout)
