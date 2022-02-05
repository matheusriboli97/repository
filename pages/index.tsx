import Presentation from '../components/Presentation';
import Header from '../components/Header';
import AboutMeQuestion from '../components/AboutMeQuestion';
import AboutMe from '../components/AboutMe';
import { useState } from 'react';

export default function Home() {
  const [showPage, setShowPage] = useState<number>(0);
  return (
    <div >
      < Header />
      <Presentation />
      {showPage === 0 && <AboutMeQuestion setShowPage={setShowPage}/>}
      {showPage === 1 && <AboutMe />}
      {showPage === 2 && <h1>2</h1>}
    </div>
  )
}