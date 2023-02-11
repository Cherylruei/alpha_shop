import Register from "./Register";
import Cart from "../Cart/Cart";
import ProgressControl from "./ProgressControl";

function Main() {
  return (
    <main>
      <div>
        <Register />
        <Cart />
      </div>
      <ProgressControl />
    </main>
  );
}

export default Main;
