import React from 'react';

class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.y,
            activeStatus: false,
            borderWidth: "1px"
        }
        console.log("bucket...", this.props);
    }

    handleMouseEnter = (e) => {
        console.log("handleMouseEnter...", this.props.draggingStatus);
        if (this.props.draggingStatus === true) {
            this.setState({borderWidth: "3px"});
        }        
    }

    handleMouseOut = (e) => {
        this.setState({borderWidth: "1px"});
    }

    render() {
        return (
            <g>
                <rect 
                    x={this.state.x}
                    y={this.state.y}
                    width="50"
                    height="50"
                    fill="green"
                    strokeWidth = {this.state.borderWidth}
                    stroke = "black"                
                    onMouseEnter = {this.handleMouseEnter}
                    onMouseOut = {this.handleMouseOut}
                />
            </g>          
        );
    }
}

export default Bucket;