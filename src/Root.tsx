import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Key} from './anti_pattern/Key';
import {ArrowFunction} from './anti_pattern/ArrowFunction';
import {ArrowFunction2} from './anti_pattern/ArrowFunction2';
import {PropsMapState} from './anti_pattern/PropsMapState';
import {HardTestArrow} from './anti_pattern/HardTestArrow';
import {HardTestBind} from './anti_pattern/HardTestBind';
import {PresentationalContainerComponents} from './pattern/PresentationalContainerComponents';
import {HigherOrderComponents} from './pattern/HigherOrderComponents';
import {RenderProps} from "./pattern/RenderProps";
import {FunctionAsChildComponents} from "./pattern/FunctionAsChildComponents";
import {CompoundComponents} from './pattern/CompoundComponents';
import {InheritanceVsHoc} from "./pattern/InheritanceVsHoc" 

export class Root extends React.Component{

    public render() {
            return (
                <div>
                        <Switch>
                            <Route exact path={"/anti-pattern/key"} component={Key} />
                            <Route exact path={"/anti-pattern/arrow-function"} component={ArrowFunction} />   
                            <Route exact path={"/anti-pattern/arrow-function2"} component={ArrowFunction2} />  
                            <Route exact path={"/anti-pattern/arrow-function4000"} component={HardTestArrow} /> 
                            <Route exact path={"/anti-pattern/bind-function4000"} component={HardTestBind} /> 
                            <Route exact path={"/anti-pattern/props-map-state"} component={PropsMapState} />   

                            <Route exact path={"/pattern/presentational-container-components"} component={PresentationalContainerComponents} /> 
                            <Route exact path={"/pattern/higher-order-components"} component={HigherOrderComponents} /> 
                            <Route exact path={"/pattern/inheritance-vs-hoc"} component={InheritanceVsHoc} /> 
                            <Route exact path={"/pattern/render-props"} component={RenderProps} /> 
                            <Route exact path={"/pattern/function-as-child-components"} component={FunctionAsChildComponents} /> 
                            <Route exact path={"/pattern/compound-components"} component={CompoundComponents} />                                                                 
                                                                                               
                        </Switch>                       
                </div>
            );       
    }
}
