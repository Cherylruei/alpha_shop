import Register from "./Register";
import Cart from "../Cart/Cart.jsx";
import ProgressControl from "./ProgressControl";

function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}

export default Main;
