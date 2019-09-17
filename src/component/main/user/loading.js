import React, {Component} from 'react';
import './style.scss'
class Loading extends Component {
    render() {
        return (
            <div>
                    <i className="loading-icon fa fa-cog fa-spin" />
            </div>
        );
    }
}

export default Loading;