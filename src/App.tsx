import Examen from "./components/hooks/Examen";
import { Navigate, Route, Routes } from 'react-router-dom';
import MainHooks from "./components/hooks/MainHooks";




function App() {
  return (
    <div>
      {/* <Headers /> */}
      <Routes>
        <Route path='hooks' element={< MainHooks />} />
      </Routes>
      
  </div>
  );
}


export default App;
