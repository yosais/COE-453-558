import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Greeting extends React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {name: "Khaled Ahmad"}
        //Bind event listner
        this.updateState = this.updateState.bind(this);
    }

    updateState(){
        this.setState( {name: "Majed Ali"} );
    }

    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={this.updateState}>Click Me!</button>
            </div>
        );
    }
}

ReactDOM.render(<Greeting /> , document.getElementById('root'));

