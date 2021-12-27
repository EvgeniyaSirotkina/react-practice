import { StrictMode } from "react";
import ReactDOM from "react-dom";

const TestFunc = (props) => {
  const { title, data } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <b>Param2: </b>
        {data}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TestFunc title="Test1" data="test1" />
      <TestFunc title="Test2" data="test2" />
      <TestFunc title="Test3" data="test3" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
