import React, {Component} from 'react';





class TripInspirationMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

    }
    //na klkniecie w buttona łączy nas serverm do wyszukiwania kraju... ipodaje info o nim
     handleOnchange = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value
        })
    };
    // tutaj wstawić if który w zalezności od klinietego buttona
    // zwraca innego inputa
    render() {
        return (
            <form>
                <label>Type {this.props.data.btn1} you want to visit: </label>
                <input type="text" value={this.state.inputValue} onChange={this.handleOnchange}/>
                <button>Search</button>
            </form>
        )
    };
};




export default TripInspirationMain;