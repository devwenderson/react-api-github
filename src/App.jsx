import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
// Components
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
