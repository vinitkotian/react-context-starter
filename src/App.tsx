import Counter from "./counter/Counter.tsx";
import styles from './App.module.scss';
import {CounterContextProvider} from "./counter/counter-context-provider.tsx";

function App() {
  return <div className={styles.main}>
    <CounterContextProvider>
      <Counter/>
    </CounterContextProvider>
  </div>
}

export default App
