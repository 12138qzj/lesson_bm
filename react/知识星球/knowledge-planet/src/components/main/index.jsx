import React,{ Component } from 'react';
import Head from './head/Head';
import Center from './center/Center';
import Bottom from '../bottom/Bottom';
// import logo from './logo.svg';



class  Components extends Component {
  state = {  }
  render() { 
    return ( 
      <div >
        <Head/>
        <Center/>
        <Bottom/>
        </div>
     );
  }
}
 
export default Components ;

// function App() {
//   return (
    
//   );
// }

// export default App;
