// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComputerList from './componenets/ComputerList';
import ComputerDetails from './componenets/ComputerDetails';
import 'bootstrap/dist/css/bootstrap.min.css';


const computers = [
  { id: '1', name: 'Computer 1', description: 'PC Portable Gamer HP Victus', imageSrc: '/img1.jpg',prix:"7490 DH" },
  { id: '2', name: 'Computer 2', description: 'PC Portable Gamer HP Victus', imageSrc: '/img2.jpg', prix:"2190 DH"},
  { id: '3', name: 'Computer 3', description: 'Pc Portable Chromebook Acer', imageSrc: '/img3.jpg',prix:"3640 DH" },
  { id: '4', name: 'Computer 4', description: 'PC Portable - HUAWEI', imageSrc: '/img4.jpg' ,prix:"1270 DH"},
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComputerList computers={computers} />} />
        <Route path="/computer/:id" element={<ComputerDetails computers={computers} />} />
      </Routes>
    </Router>
  );
};

export default App;
