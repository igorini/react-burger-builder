import React, { useEffect } from 'react'
import axios from 'axios-orders'
import Order from 'components/Order/Order'
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler'
import { bindActionCreators } from 'redux'
import { actions } from 'containers/Orders/ordersSlice'
import { connect } from 'react-redux'
import Spinner from 'components/UI/Spinner/Spinner'

const Orders = (props) => {
  const fetchOrders = props.fetchOrders

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return !props.loading ? (
    <div>
      {props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ))}
    </div>
  ) : (
    <Spinner />
  )
}

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
  loading: state.orders.ordersLoading,
})

const mapDispatchToProps = (dispatch) => {
  const { fetchOrders } = bindActionCreators(actions, dispatch)
  return { fetchOrders }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios))
