import { ToastContainer } from "react-toastify";
import "./App.css";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="app">
      <ToastContainer/>
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      {/* <Error /> */}
    </div>
  );
}

export default App;
