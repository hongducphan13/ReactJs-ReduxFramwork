import React from 'react';
import Note from './Note.js';
class List  extends React.Component{
  constructor(props)
  {
    super(props);
    this.state= {mang:['Android','IOS','NodeJS']}

  }
  remove (index){
    this.state.mang.splice(index,1);
    this.setState(this.state);
  }
  render(){
    return (
      <div>
        {this.state.mang.map((e,i) =><Note index={i}
          handleRemove={this.remove.bind(this)} key={i}>{e}</Note>)}
      </div>
    )
  }
}

module.exports = List;
