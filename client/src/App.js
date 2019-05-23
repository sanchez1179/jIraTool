import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {updateBeginDate, updateEndDate, submit} from './actions';

import './App.css';

const mapStateToProps = (state) => {
    return {
        dateBegin: state.dateBegin,
        dateEnd: state.dateEnd,
        submitted: state.submitted
    }
}

const mapDispatchToProps = {
    updateBeginDate,
    updateEndDate,
    submit
};

// const mapDispatchToProps = (dispatch, props) => bindActionCreators({
//     getBugz: () => getBugs(props.dateBegin)
// }, dispatch)


const App = ({dateBegin, dateEnd, submitted, updateEndDate, updateBeginDate, submit}) => (
            <div className="center mw6-ns mw5">
                <form className="pa4 black-80" onSubmit={e => {
                  e.preventDefault();
                  submit();
                }}
                >
                    <div className="measure">
                        <label  className="f6 b db mb2"> Date </label>
                        <input
                            name="dateBegin"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            value = {dateBegin}
                            onChange= {e => {
                              updateBeginDate(e.target.value)
                            }}
                        />
                        <input
                            name="dateEnd"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            value = {dateEnd}
                            onChange= {(e) => (
                              updateEndDate(e.target.value)
                            )}
                        />
                            <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
                            <button type="submit" className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black ">Submit</button>
                    </div>
                </form>
                <div>
                    <h1>hello:</h1>
                    <p>{submitted ? 'IS TRUE' : 'IS FALSE'}</p>
                    <p>{dateBegin}</p>
                    <p>{dateEnd}</p>
                </div>
            </div>
        )

export default connect(mapStateToProps, mapDispatchToProps)(App)
