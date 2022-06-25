import React, { Component } from 'react'
import './style.css'


// export class DogPhoto extends Component {

//   render() {
//     return (
//       <div className="photo-card">
//         <img class="dog-photo" src={this.props.image} alt="dog"/>
        
//       </div>
//     )
//   }
// }


export const DogPhoto = props => (

  <div className="photo-card">
    <img class="dog-photo" src={props.image} alt="dog"/>
    
  </div>
)

