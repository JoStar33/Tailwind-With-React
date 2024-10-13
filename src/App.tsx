import reactLogo from './assets/react.svg';
import CardRenderPage from './pages/CardRenderPage';
import TestPage from './pages/TestPage';
import viteLogo from '/vite.svg';

function App() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="w-56">
        <div className="border-indigo-600 flex w-full items-center justify-center border">
          <a className="h-20 flex w-1/2 items-center justify-center" href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo select-none" alt="Vite logo" />
          </a>
          <a className="h-20 flex w-1/2 items-center justify-center" href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react select-none" alt="React logo" />
          </a>
        </div>
      </div>
      <TestPage />
      <CardRenderPage />
    </div>
  );
}

export default App;
