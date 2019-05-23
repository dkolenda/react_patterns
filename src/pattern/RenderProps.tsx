import React from 'react';
import * as CharacterApi from '../connectors/character'
import {Person} from './PresentationalContainerComponents'
import {PresentationalComponentswithLoaderAndError} from './HigherOrderComponents'

export class RenderProps extends React.Component<any,any>{

    private renderProps = (props:CCP,state:CCS)=>{
        return <PresentationalComponentswithLoaderAndError characterList={state.characterList} error={state.error} loader={state.loader} />
    }

    public render(){
        return  <div>
                    <ContainerComponents render={this.renderProps} />
                </div>
    }
}

export class ContainerComponents extends React.Component<CCP,CCS>{

    constructor(props:any){
        super(props)
        this.state = {
            characterList:[],
            error:false,
            loader:true
        }
    }

    componentDidMount(){      
        CharacterApi.getCharacters()
        .then((response)=>{
            this.setState({
                characterList:response.data.results,
                loader:false
            })
        })
        .catch(()=>{
            this.setState({
                error:true,
                loader:false
            })
        });
    }

    public render(){
        return this.props.render(this.props,this.state);
    }
}

type CCP = {
    render:(props:CCP,state:CCS)=>JSX.Element
}

type CCS = {
    characterList:Array<Person>,
    error:boolean,
    loader:boolean
}