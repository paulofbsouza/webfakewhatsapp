import react from 'react';
import HeaderProfile from './components/headerprofile';
import Searcher from './components/searcher';
import Chatlist from './components/chatlist';
import './index';

function App() {
  return (
    <div className= 'AppConteiner'>
      <div className= 'LeftConteiner'>
    <HeaderProfile/>
    <Searcher/>
    <Chatlist/>
         </div>
      <div className= 'RightConteiner'>
      </div>
      Powered by Paulo Barbosa
    </div>
  );
}

export default App;
