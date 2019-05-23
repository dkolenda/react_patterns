import axios from 'axios';

export const getCharacters = function(){
    return axios.get('https://rickandmortyapi.com/api/character/?page=1');
}