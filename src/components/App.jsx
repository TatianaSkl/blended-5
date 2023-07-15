import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layot';
import { Home } from 'pages/Home';
import { Rates } from 'pages/Rates';
import { useEffect } from 'react';
import { fetchBaseCurrency } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { setBaseCurency } from 'redux/currencySlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fetchBaseCurrency(crd));
    }

    function error(err) {
      dispatch(setBaseCurency(`usd`));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
