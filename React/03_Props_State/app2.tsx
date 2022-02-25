import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Secret extends React.Component<any, any> {
    constructor(props){
        super(props);
        this.state = {name: "Top Secret!"};
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState(() => ({name: "Ahmad"}));
    }

    render() {
        return(<div>
            <h1>My name is {this.state.name}</h1>
            <button onClick={this.onButtonClick}>reveal the secret!</button>
        </div>);
    }
}

ReactDOM.render(<Secret/>, document.getElementById('root'));