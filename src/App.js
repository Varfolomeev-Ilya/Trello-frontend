import React from 'react';
import Routers from '../src/Router/Router';
// import { regUser } from '../src/store/users';
// import { useDispatch, useSelector } from 'react-redux';
// import { tokenChecker } from '../src//api/authApi';

function App() {
  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.users.registeredUser);
  // const id = userInfo.id;
  // console.log(id)
  // const [isLoading, setIsLoading] = React.useState(false);
  // const checkToken = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await tokenChecker(id);
  //     if (response.data) {
  //       console.log(response)
  //       dispatch(regUser(response.data));
  //     } else {
  //       localStorage.removeItem('isAuthenticated');
  //     }
  //   } catch (error) {
  //     alert(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // React.useEffect(() => {
  //   checkToken();
  // }, []);

  return (
    <>
              <Routers />
              </>
         
    //   {isLoading ? (
    //     <></>
    //   ) : (
    //     <>
    //     </>  
    //     )}
    // </> */}
  )
};

export default App;