import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/user/slice";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

  const dispatch = useDispatch()

  const productsCount = useSelector(selectProductsCount)

  const hendleLoginClick = () => {
    dispatch(login({name: "Julio", email: "julio100@gmail.com"}))
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogoutClick = () => {
    dispatch(logout(null))
  }




  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (<div onClick={handleLogoutClick}>Sair</div>) : ( <div onClick={hendleLoginClick}>Login</div> )}        
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
