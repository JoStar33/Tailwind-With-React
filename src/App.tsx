import reactLogo from "./assets/react.svg";
import TestPage from "./pages/TestPage";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="flex justify-center items-center h-dvh flex-col">
      <div className="w-56">
        <div className="flex items-center justify-center border border-indigo-600 w-full">
          <a
            className="w-1/2 flex items-center justify-center h-20"
            href="https://vitejs.dev"
            target="_blank"
          >
            <img src={viteLogo} className="logo select-none" alt="Vite logo" />
          </a>
          <a
            className="w-1/2 flex items-center justify-center h-20"
            href="https://react.dev"
            target="_blank"
          >
            <img
              src={reactLogo}
              className="logo react select-none"
              alt="React logo"
            />
          </a>
        </div>
      </div>
      <TestPage />
    </div>
  );
}

export default App;
