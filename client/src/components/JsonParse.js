import React from 'react';

class JsonParse extends React.Component {
    render() {
        
var responce = {
    "0":{
       "data":{ "name":"vas" }
    },
    "1":{
       "data":{ "name":"vas2" }
    }
 }
 
 for(var i in responce){
   console.log(responce[i].data.name);
   var st = responce[i].data.name;
 }
 return (
    <div>
    <h3>HELLO</h3>
    <p className="id"></p>
    <p className="status">{st}</p>
    </div>
 );
}
}
export default JsonParse;