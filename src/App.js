import React from 'react';
import Routers from '../src/Router/Router';
import { regUser } from '../src/store/users';
import { useDispatch } from 'react-redux';
import { tokenChecker } from '../src//api/authApi';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const checkToken = async () => {
    setIsLoading(true);
    try {
      const response = await tokenChecker();
      if (response.data) {
        dispatch(regUser(response.data));
      } else {
        localStorage.removeItem('isAuthenticated');
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
          <>
            <Routers />
          </>
        )}
    </>
  )
};

export default App;