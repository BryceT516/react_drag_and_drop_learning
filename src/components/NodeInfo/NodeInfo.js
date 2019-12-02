import React from 'react';


class NodeInfo extends React.Component {
    listDataForNode(key, value) {
      return (
          <div>
            Node {key}: x: {value.x}, y: {value.y}
          </div>
      )
    }
    
    render() {
      return (
        <div>
          <ul>          
            {Object.entries(this.props.nodeData).map(([key, value]) => {
              return (
                  <li key={key}>
                    Node: {key} - x: {value.x}, y: {value.y}
                  </li>  
              );
            })}
          </ul>
        </div>
      )
    }
}

export default NodeInfo;