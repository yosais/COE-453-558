import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Letter extends React.Component {

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Letter>A</Letter>
        <Letter>B</Letter>
        <Letter>C</Letter>
    </div>, document.getElementById('container')
);

