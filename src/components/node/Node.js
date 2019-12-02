import React from 'react';

class Node extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: this.props.x,
        y: this.props.y,
        nodeId: this.props.nodeId
      };
    }  
  
    componentDidMount() {
      this.props.updateNodeData(this.state.nodeId, this.state.x, this.state.y);
    }
    
    handleMouseDown = (e) => {
      this.origin = {
        x: this.state.x,
        y: this.state.y
      }
      
      this.coords = {
        x: e.pageX,
        y: e.pageY
      }

      this.props.updateNodeData(this.state.nodeId, e.pageX, e.pageY);

      this.props.updateDragging(true);

      document.addEventListener('mousemove', this.handleMouseMove);
    };
    
    handleMouseUp = () => {      
      document.removeEventListener('mousemove', this.handleMouseMove);
      this.props.updateDragging(false);
      this.coords = {};
    };
    
    handleMouseMove = (e) => {
      const xDiff = this.coords.x - e.pageX;
      const yDiff = this.coords.y - e.pageY;
  
      this.coords.x = e.pageX;
      this.coords.y = e.pageY;
  
      this.setState({
        x: this.state.x - xDiff,
        y: this.state.y - yDiff
      });
      
      this.props.updateNodeData(this.state.nodeId, this.state.x, this.state.y)
    };
  
    render() {
      const { x, y } = this.state;
      return (
        <g id={"node_"+this.state.nodeId+"_graphic"} className="draggable">
          <circle
            r="20"
            cx={x}
            cy={y}
          />
          <text x={x-4} y={y} textAnchor="middle" stroke="white" strokeWidth="1px" dy=".1em">{this.state.nodeId}</text>
          <circle
            r="20"
            cx={x}
            cy={y}
            opacity="0.0"
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
        </g>
      )
    }
  }

  export default Node;