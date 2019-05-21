import React from 'react';

export class ArrowFunction extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {counter:0}
        this.counterAction3 = this.counterAction3.bind(this);
    }

    private counterUp(){this.setState({counter:this.state.counter+1})}

    public counterAction1 = () =>{this.counterUp();}

    public counterAction2(){this.counterUp();}

    public counterAction3(){this.counterUp();}

    public render(){
        return <div>
            <span>Licznik: {this.state.counter}</span>
            <ItemButton label="Arrow in render" onClick={()=>{this.counterUp()}}/>
            <ItemButton label="Arrow out render" onClick={this.counterAction1}/>         
            <ItemButton label="Bind in render" onClick={this.counterAction2.bind(this)}/>
            <ItemButton label="Bind out render" onClick={this.counterAction3}/>
        </div>
    }

}

class ItemButton extends React.Component<ItemButtonP,any>{
    public render(){
        return <div><button onClick={this.props.onClick}>{this.props.label}</button></div>
    }
}

type ItemButtonP = {
    onClick:()=>void,
    refTest?:any,
    label:string,

}