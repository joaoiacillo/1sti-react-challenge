import "./assets/css/reset.css";
import './assets/css/styles.css';
import "./assets/css/mobile.css";

import Container from "./components/ui/Container";
import Separator from './components/ui/Separator';

import Header from "./sections/Header";
import Capitals from './sections/Capitals';

export default function App() {
  return (
    <div className='app'>
      <Container>
        <Header />
        <Separator />
        <Capitals />
      </Container>
    </div>
  );
}

