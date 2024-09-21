import './App.css';
import Desf from './events/desf'
import Desc from './events/desc'
import Descs from './events/descs'
function App() {
  return (
    <div className="App">
      <div>
        <Desf tech='react' media='Linkedin' />
        <p>The above statement is from function component, to verify the destucturing of props.</p>
      </div>

      <div>
        <Desc tech='FullStack' media='Git' />
        <p>The above statement is from class component, to verify the destucturing of props.</p>
      </div>

      <div>
        <Descs />
      </div>

    </div>
  );
}

export default App;
