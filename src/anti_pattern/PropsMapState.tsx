import React from 'react';

export class PropsMapState extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {counter:0}
        this.counterAction3 = this.counterAction3.bind(this);
    }

    private counterUp(){this.setState({counter:this.state.counter+1})}

    public counterAction3(){this.counterUp();}

    public render(){
        return <div>
            <span>Licznik: {this.state.counter}</span>
            <ItemButton label={"Bind out render "+this.state.counter} onClick={this.counterAction3}/>
        </div>
    }

}

class ItemButton extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        console.log("constructor");
        this.state = {
            label: this.props.label
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    public render(){
        console.log("render");
        return <div><button onClick={this.props.onClick}>{this.state.label}</button></div>
    }
}

type ItemButtonP = {
    onClick:()=>void,
    refTest?:any,
    label:string,

}