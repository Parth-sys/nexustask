import logo from './logo.svg';
import './App.css';
import Navbar from './components/home';
import First from './components/first';
import Second from './components/second';
import Video from './components/Vid';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import Banner from './components/banner';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <First></First>
      <Second></Second>
      <Video></Video>
      <Four></Four>
      <Five></Five>
      <Six></Six>
      <Seven></Seven>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
