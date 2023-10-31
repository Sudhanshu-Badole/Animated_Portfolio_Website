import "./app.scss"
import Work from "./components/lastest_work/Work";
import Index from "./components/layout";

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

const App = () => {
  return (
    <Router>
            <Routes>
                <Route exact path='/' element={<Index />} />
                <Route exact path='/work' element={<Work />} />
            </Routes>
        </Router>
  );

};

export default App;
