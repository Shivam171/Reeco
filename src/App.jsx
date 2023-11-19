import "./App.css";
import styled from "styled-components";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <TopSection />
      {/* Nav */}
      {/* HeadToOrder */}
      <BottomSection />
      {/* OrderInfo */}
      {/* OrderDetail */}
      {/* Search&Add */}
    </Main>
  );
}

export default App;
