// import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Main from "./components/Checkout/Main";
import Footer from "./components/Footer/Footer";
import "./style/App.scss"

// function Container({children}) {
//   return <div style={{ backgroundColor: "pink" }}>
//     {children}
//   </div>;
// }

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>It is my first react project</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
