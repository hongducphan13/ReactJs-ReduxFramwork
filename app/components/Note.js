import React from 'react';

class Note extends React.Component{
  render(){
    return (
        <div>
          <p> {this.props.children}</p>
          <button onClick={this.removeNote}>Delete</button>
        </div>

    )
  }
}

module.exports = Note;
