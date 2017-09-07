import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions/counter'

var Root = ({count, increment, decrement}) => (
    <div>
        <h1>Counter</h1>
        <div>count = {count}</div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
