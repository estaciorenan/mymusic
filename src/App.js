import styles from "./App.module.css";
import Index from "./ui/pages";
import { useApp } from "./data/hooks/useApp.page";
import { createContext } from "react";

export const AppContext = createContext({})

function App() {
  const useAppValue = useApp();

  return (
    <>
      <header className={styles['header']}>
        <h1>
          My<span>Music</span>
        </h1>
      </header>
      <AppContext.Provider value={useAppValue}>
      <Index />
      </AppContext.Provider>
    </>
  );
}

export default App;
