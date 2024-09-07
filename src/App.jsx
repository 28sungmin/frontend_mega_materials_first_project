import logo from "./logo.svg";
import "./App.css";
import HeaderCp from "./components/HeaderCp";
import MainBannerCp from "./components/MainBannerCp";

function App() {
  return (
    <div className="app">
      <HeaderCp cpName="헤더 공간" />
      <MainBannerCp />
      {/* <header>
        <div className="wrap">
          <div className="logo">
            <a href="/">logo</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
    </div>
    // <>
    //   <div style={{ backgroundColor: "#ffa" }}>
    //     <h1>Hello React CRA</h1>
    //   </div>
    // </>
  );
}

export default App;
