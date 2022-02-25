import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IGreetingProps {
    name: string;
}

class Greeting extends React.Component<IGreetingProps, any> {

    render() {
        return(
            <h1>Hello {this.props.name}</h1>
        );
    }
}

ReactDOM.render(<Greeting name = "Ahmad Khaled"/> , document.getElementById('root'));

