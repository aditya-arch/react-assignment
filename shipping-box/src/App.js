import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BoxForm from './components/BoxForm';
import BoxTable from './components/BoxTable';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '1rem', minHeight: 'calc(100vh - 60px)' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/add" />} />
          <Route path="/add" element={<BoxForm />} />
          <Route path="/list" element={<BoxTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
