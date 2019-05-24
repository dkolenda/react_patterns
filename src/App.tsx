import React from 'react';
import './App.css';
import { BrowserRouter as Router,NavLink } from "react-router-dom";
import {Root} from './Root'

const App: React.FC = () => {
  return (
    <Router>
        <NavLink to={"/anti-pattern/props-map-state"}>Inicjalizacja stanu na podstawie props</NavLink><br/>
        <NavLink to={"/anti-pattern/key"}>Przypadkowe wartości w props key</NavLink><br/>
        <NavLink to={"/anti-pattern/arrow-function"}>Funkcja strzałkowa w props komponentu (przykład 1)</NavLink><br/>
        <NavLink to={"/anti-pattern/arrow-function2"}>Funkcja strzałkowa w props komponentu (przykład 2)</NavLink><br/>    
        <NavLink to={"/anti-pattern/arrow-function4000"}>Funkcja strzałkowa w props komponentu (przykład hard arrow)</NavLink><br/>
        <NavLink to={"/pattern/presentational-container-components"}>Presentational Container Components</NavLink><br/>
        <NavLink to={"/pattern/higher-order-components"}>Higher Order Components</NavLink><br/>
        <NavLink to={"/pattern/inheritance-vs-hoc"}>Inheritance vs HOC</NavLink><br/>
        <NavLink to={"/pattern/render-props"}>Render Props</NavLink><br/>
        <NavLink to={"/pattern/function-as-child-components"}>Function as Child Components</NavLink><br/>
        <Root />
    </Router>
  );
}

export default App;
