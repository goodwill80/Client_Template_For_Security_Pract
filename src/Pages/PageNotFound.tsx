import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h3>Page not found</h3>
      <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
