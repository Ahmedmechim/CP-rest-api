import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossorigin="anonymous"
      ></link>
      <UserList />
    </div>
  );
}

export default App;
