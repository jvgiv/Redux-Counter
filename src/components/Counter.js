import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        // console.log(this.props.count % 2)
        this.props.count % 2 !== 0 ? this.props.increment() : null
        
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        const styledOutlineBox = {
            border: '2px solid black',
            width: '60%',
            margin: '10px auto',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            borderRadius: '5px',
            boxShadow: '5px 5px 5px #CCC'
        }

        const styledP = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '30px',
            margin: '12px'
        }

        const styledButton = {
            width: '40%',
            margin: '10px',
            borderRadius: '5px',
            fontWeight: 'bold',
            boxShadow: '5px 5px 5px #CCC'
        }

        return (
            <div style={styledOutlineBox}>
                <p style={styledP}>
                    Clicked: {this.props.count} times
                    <button style={styledButton} onClick={() => {this.props.increment()}}>
                        +
                    </button>
                    <button style={styledButton} onClick={() => {this.props.decrement()}}>
                        -
                    </button>
                    {/* Uncomment these button tags if you got
                    around to implementing the extra credit functions */}
                    <button style={styledButton} onClick={this.incrementIfOdd}>
                        Increment if odd
                        </button>
                        <button style={styledButton} onClick={this.incrementAsync}>
                        Increment async
                    </button>  
                </p>
            </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
