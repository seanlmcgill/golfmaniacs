import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GmNavBar } from './layout/GmNavBar';
import { Profile } from './profile/Profile';
import { Scores } from './scores/Scores';
import { Courses } from './courses/Courses';
import { Friends } from './friends/Friends';
import { UserProvider } from '../providers/userProvider';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header"></header>
        <GmNavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

export default App;
