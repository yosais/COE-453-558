import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Greeting extends React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {name: "Khaled Ahmad"}
    }

    render() {
        return(
            <h1>Hello {this.state.name}</h1>
        );
    }
}

ReactDOM.render(<Greeting /> , document.getElementById('root'));

