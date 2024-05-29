import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {loginUser, logOutUser} from '../../redux/user/actions'
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
// import rootReducer from "../../redux/root-reducer";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  const hendleLoginClick = () => {
    dispatch(loginUser({name: "Julio", email: "julio100@gmail.com"}))
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogoutClick = () => {
    dispatch(dispatch(logOutUser(null)))
  }


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (<div onClick={handleLogoutClick}>Sair</div>) : ( <div onClick={hendleLoginClick}>Login</div> )}        
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
