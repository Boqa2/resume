import Article from "./components/Article";
import Articleis from "./components/Articleis";
import Box from "./components/Box";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Box>
        <Article />
        <div className="flex flex-col md:flex-row">
          <Main />
          <Articleis />
        </div>
      </Box>
    </>
  );
};

export default App;
