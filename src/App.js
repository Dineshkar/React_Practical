// import logo from './logo.svg';
import './App.css';
import FunctionalComponents from "./Components/FunctionalComponents";
import ClassComponent from "./Components/ClassComponent"
import JsxFunction from "./Components/JsxFunction"
// import PropsBasic from "./Components/PropsBasic"
import StateComponent from "./Components/StateComponent"
import SetState from "./Components/SetState"
import StatePractice from './Components/StatePractice';
import StateCalc from "./Components/StateCalc";
import EventFunctional from "./Components/EventFunctional"
import EventClass from "./Components/EventClass"
import BindingEvent from "./Components/BindingEvent"
import MethodPropsParent from "./Components/MethodPropsParent"
import ConditionalRendering from "./Components/ConditionalRendering"
import ListRendering from "./Components/ListRendering"
import ListRenderingExample from "./Components/ListRenderingExample"
import Form from "./Components/Form"
import LifecycleA from "./Components/LifecycleA"
import HooksExample from "./Components/Hooks/HooksExample"
import HooksForm from "./Components/Hooks/HooksForm"
import HookFormsTwo from "./Components/Hooks/HookFormsTwo"
import CounterHook from "./Components/Hooks/CounterHook"
import ClassCounter from "./Components/Hooks/ClassCounter"
import HookForm from "./Components/Hooks/HookForm"
import InputNumberHooks from "./Components/Hooks/InputNumberHooks"
import FormTable from "./Components/Hooks/FormTable"
import Table from "./Components/Hooks/Table"
import TableHooks from "./Components/Hooks/TableHooks"
function App() {
  return (
    <div className="App">
     
     <FunctionalComponents />
     <ClassComponent />
     <JsxFunction /> 
     <StateComponent />
     <SetState />
     <StatePractice />
     <StateCalc />
     {/* <PropsBasic  name = "Dinesh" City =  "Bangalore" /> */}
     <EventFunctional />
     <EventClass />
     < BindingEvent />
     <MethodPropsParent />
     <ConditionalRendering/>
     <ListRendering />
     < ListRenderingExample />
     < Form />
     <LifecycleA/>

     {/* Upcoming Folders are Hooks Example  */}
     < HooksExample />
     <HooksForm />
     <HookFormsTwo />
     <CounterHook />
     <ClassCounter />
     <HookForm />
     <InputNumberHooks />
     <FormTable />
     < Table />
     < TableHooks/>

    </div>
  );
}

export default App;
