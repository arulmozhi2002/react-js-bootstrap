import logo from './logo.svg';
import './App.css';
import BasicExample from './components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerFluidExample from './components/main';
import GroupExample from './cart';
import About from './about'

function App() {
  return (
    <div>
      <BasicExample/>
 <ContainerFluidExample/>
<GroupExample/>
<About/>
      </div>
  );
}

export default App;
