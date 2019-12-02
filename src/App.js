import React from 'react';
import './App.css';
import NodeInfo from './components/NodeInfo/NodeInfo';
import Node from './components/node/Node';
import Bucket from './components/bucket/Bucket';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeData: {},
      draggingStatus: false
    };
  }

  updateNodeData(nodeId, x, y) {
    let newNodeData = this.state.nodeData
    newNodeData[nodeId] = {x: x, y: y}
    this.setState({nodeData: newNodeData})
  }
  
  updateDragging(draggingStatus){
    console.log("updateDragging...", draggingStatus);
    this.setState({draggingStatus: draggingStatus});
  }

  componentDidMount(){
    
  }
  
  render() {
    return (
      <div className="container">
        <div className="graphics">
          <svg id="svg-box" height="100%" width="100%">
            <Node x={20} y={20} updateNodeData={this.updateNodeData.bind(this)} nodeId={1} updateDragging={this.updateDragging.bind(this)} />
            <Node x={60} y={60} updateNodeData={this.updateNodeData.bind(this)} nodeId={2} updateDragging={this.updateDragging.bind(this)} />
            <Node x={100} y={100} updateNodeData={this.updateNodeData.bind(this)} nodeId={3} updateDragging={this.updateDragging.bind(this)} />
            <Node x={140} y={140} updateNodeData={this.updateNodeData.bind(this)} nodeId={4} updateDragging={this.updateDragging.bind(this)} />
            <Bucket x={250} y={250} draggingStatus={this.state.draggingStatus} />
          </svg>
        </div>
        <div className="info">
          <h2>Info</h2>
          <NodeInfo nodeData={this.state.nodeData} />
        </div>
      </div>
    )
  }
}

export default App;
