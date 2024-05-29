import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
// import rootReducer from "../../redux/root-reducer";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  console.log(currentUser)

  const hendleLoginClick = () => {
    dispatch({
      type: 'user/login',
      payload: { name: "Julio", email: "julio100@gmail.com" }
    })
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={hendleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
