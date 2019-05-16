import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import getBugs from './jql'
import './App.css';

// const mapStateToProps = (state) => {
//     return{
//
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return{
//
//     }
// }


class App extends Component {
    constructor(){
        super();
        this.state = {
            date: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit (e) {
       e.preventDefault();
            const newDate = {
                dateBegin: this.state.dateBegin,
                dateEnd: this.state.dateEnd
            }
            this.props.getBugs(newDate);
        }
    render() {
        return (

            <div className="center mw6-ns mw5">
                <form className="pa4 black-80" onSubmit={this.onSubmit}>
                    <div className="measure">
                        <label  className="f6 b db mb2"> Date </label>
                        <input
                            name="dateBegin"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            value = {this.state.dateBegin}
                            onChange={this.onChange}
                        />
                        <input
                            name="dateEnd"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            value = {this.state.dateEnd}
                            onChange={this.onChange}
                        />
                            <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
                            <button type="submit" className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black " href="#0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;
