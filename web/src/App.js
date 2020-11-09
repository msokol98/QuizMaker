import './App.css';
import 'bulma/css/bulma.css'

import QuizCreationForm from './components/create/quizCreationFormContainer';

function App() {
  return (
    <div className="has-background-light app">
      <div className="container">
        <QuizCreationForm />
      </div>
    </div>
  );
}

export default App;
