import React from 'react';
import * as CharacterApi from '../connectors/character'
import {Loader,ErrorMsg,PCProps,Person} from './PresentationalContainerComponents'

export class HigherOrderComponents extends React.Component<any,any>{
    public render(){
        return  <div>
                    <ContainerComponents />
                </div>
    }
}

export class ContainerComponents extends React.Component<any,any>{

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
        return <PresentationalComponentswithLoaderAndError characterList={this.state.characterList} error={this.state.error} loader={this.state.loader} />
    }
}

export class PresentationalComponents extends React.Component<PCProps,any>{
    public render(){
        const {characterList} = this.props;
        return (
            <div>
                {
                   characterList.map((character:Person)=>{
                       return <div className="box" key={character.id}>
                           <div className="box__title">{character.name}</div>
                           <div className="box__img"><img src={character.image} alt={""} /></div>
                           <div className="box__desc">
                               <div className="box__desc__el">Status: {character.status}</div>
                               <div className="box__desc__el">Species: {character.species}</div>
                               <div className="box__desc__el">Gender: {character.gender}</div>
                           </div>
                       </div>
                   }) 
                }

                {this.props.children}
            </div>
        )
    }
}

export const withLoaderAndError = (PresentationalHOC:any) =>{
    return class extends React.Component<PCProps2,any>{
        render() {
            const {loader,error, ...orginalProps} = this.props;

            if(loader){
                return <Loader/>
            }
    
            if(error){
                return <ErrorMsg/>
            }

            return <PresentationalHOC {...orginalProps} />
        }
    }
}

export const PresentationalComponentswithLoaderAndError = withLoaderAndError(PresentationalComponents);

export type PCProps2 = {
    characterList:Array<Person>,
    loader:boolean,
    error:boolean
}