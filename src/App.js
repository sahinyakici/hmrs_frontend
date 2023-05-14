import "./App.css";
import Navi from "./layouts/Navi.jsx";
import { Container } from "semantic-ui-react";
import JobsList from "./pages/JobsList";
import CandidateList from "./pages/CandidateList";
import CompanyList from "./pages/CompanyList";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <CompanyList />
      </Container>
    </div>
  );
}
export default App;
