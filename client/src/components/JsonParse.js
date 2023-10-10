import React from 'react';
import Records from './records.json'

class JsonParse extends React.Component {
  render() {
   return(
      
      Records.map(record => {
         return(
           <div className="box" key={ record.id }>
             <h3>{ record.title }</h3>
             <p>{ record.content }</p>
           </div>
         )
       })
      
   )
  }
}
export default JsonParse


 