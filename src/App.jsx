import Home from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import SmoothCursor from "./Components/SmoothCursor";

function App() {
  return (
    <>
      <SmoothCursor />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
