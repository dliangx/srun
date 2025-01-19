import Menu from '../component/Menu';
import Nav from '../component/Nav';
import MMap from './map';

const Runing = () => {
  return (
    <div>
      <div className="container">
        <Menu />
        <MMap />
      </div>
      <Nav />
    </div>
  );
};

export default Runing;
