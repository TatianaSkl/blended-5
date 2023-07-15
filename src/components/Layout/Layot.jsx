import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectBaseCurency } from 'redux/selectors';

export const Layout = () => {
  const baseCurency = useSelector(selectBaseCurency);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Rates</NavLink>
            </li>
          </ul>
        </nav>
        {baseCurency && <p> Your Base Curency :{baseCurency}</p>}
      </header>
      <Outlet />
    </>
  );
};
