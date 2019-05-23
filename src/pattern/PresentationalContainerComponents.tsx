import React from 'react';
import * as CharacterApi from '../connectors/character'

export class PresentationalContainerComponents extends React.Component<any,any>{
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
        return <PresentationalComponents characterList={this.state.characterList} loader={this.state.loader} error={this.state.error} />
    }
}

export class PresentationalComponents extends React.Component<PCProps,any>{
    public render(){
        const {characterList,loader,error} = this.props;

        if(loader){
            return <Loader/>
        }

        if(error){
            return <ErrorMsg/>
        }
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

export class Loader extends React.Component<any,any>{
    public render(){
        return (
            <div>
                Czekać...
            </div>
        )
    }
}

export class ErrorMsg extends React.Component<any,any>{
    public render(){
        return (
            <div>
                Nie udało się pobrać postaci
            </div>
        )
    }
}

export type PCProps = {
    characterList:Array<Person>,
    loader:boolean,
    error:boolean
}

export type Person = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
}