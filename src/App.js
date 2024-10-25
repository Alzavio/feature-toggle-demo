import logo from './logo.svg';
import './App.css';
import FeatureToggle from "./FeatureToggle";

function App() {
  return (
    <div>
      <FeatureToggle featureName={"Test1"} isEnabled={true} />
      <FeatureToggle featureName={"Test2"} isEnabled={false} />
      <FeatureToggle featureName={"Test3"} isEnabled={true} />
    </div>
  );
}

export default App;
