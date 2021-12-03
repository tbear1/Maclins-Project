import { Figure} from 'react-bootstrap';
import drift from '../assets/Drift.jpg';

function HomePage() {
    return (
        <div>
          
        <Figure.Image src={drift}
      width={1460}
      height={1350}
      />
      </div>
    );
}

export default HomePage;