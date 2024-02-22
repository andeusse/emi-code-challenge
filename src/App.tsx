import { useAppSelector } from './redux/reduxHooks';
import IsLoading from './components/UI/IsLoading/isLoading';
import Router from './router/Router';
import './style.css';

function App() {
  const isLoading = useAppSelector((state) => state.isLoading.value);

  return (
    <>
      <IsLoading isLoading={isLoading}></IsLoading>
      <Router></Router>
    </>
  );
}

export default App;
