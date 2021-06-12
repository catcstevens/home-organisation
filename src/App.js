import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div >
      <h1 className="text-8xl text-white flex justify-center p-10 ">StreamLiveing</h1>
      <div className='p-8 box-border w-2/5 border-8 border-white rounded-2xl shadow-2xl bg-blue-900'>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      </div>
  );
}

export default App;
