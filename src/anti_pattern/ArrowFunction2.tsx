import React from 'react';

const anyList = [1,2,3,4,5];

export class ArrowFunction2 extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {counter:0}
        this.counterAction3 = this.counterAction3.bind(this);/*1*/
    }
    private mapList(el:any){return {el}};
    private privateArrayTest = [];
    private counterUp(){this.setState({counter:this.state.counter+1})}

    public counterAction1 = () =>{this.counterUp();/*2*/}

    public counterAction2(){this.counterUp();}

    public counterAction3(){this.counterUp();}

    public render(){
        const constArrayTest:Array<any> = [];
        const mapArrayTest:Array<any> = anyList.map(this.mapList);

        return <div>
            <span>Licznik: {this.state.counter}</span>          
            <ItemButton label="Arrow in render" onClick={()=>{this.counterUp()}}/>{/* 3 */}
            <ItemButton label="Arrow out render" onClick={this.counterAction1}/>        
            <ItemButton label="Bind in render" onClick={this.counterAction2.bind(this)}/>{/* 4 */}
            <ItemButton label="Bind out render" onClick={this.counterAction3}/>

            <ItemButton label="private Array" arrayRefTest={this.privateArrayTest} onClick={this.counterAction3}/>{/* 5 */}
            <ItemButton label="new Array" arrayRefTest={[]} onClick={this.counterAction3}/> {/* 6 */}
            <ItemButton label="const Array" arrayRefTest={constArrayTest} onClick={this.counterAction3}/> {/* 7 */}
            <ItemButton label="map Array" arrayRefTest={mapArrayTest} onClick={this.counterAction3}/> {/* 8 */}

            <ItemButton2 label="Arrow in render shouldComponentUpdate" arrayRefTest={[]} onClick={()=>{this.counterUp()}}/>
        </div>
    }

}

class ItemButton extends React.PureComponent<ItemButtonP,any>{
    public render(){
        return <div><button onClick={this.props.onClick}>{this.props.label}</button></div>
    }
} 

class ItemButton2 extends React.Component<ItemButtonP,any>{

    shouldComponentUpdate(nextProps:any, nextState:any) {
        // eslint-disable-next-line
        if (this.props.label != nextProps.label) {return true;}

        if(JSON.stringify(this.props.arrayRefTest) !== JSON.stringify(nextProps.arrayRefTest)) {return true;}

        return false;
    }

    public render(){
        return <div>
            <button onClick={this.props.onClick}>{this.props.label}</button>
        </div>
    }
}

type ItemButtonP = {
    onClick:()=>void,
    arrayRefTest?:any,
    label:string,

}