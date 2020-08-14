// Write your Character component here
import React, {useEffect} from 'react'
import styled from 'styled-components'
import Movie from './Movie'


//component styling
const StyledCharacter = styled.div`
    width: 70%;
    border: 1px solid gray;
    background-color: white;
    margin: 0 auto; 
    .movie-list{
        display: flex;
        margin: 2%;
        flex-wrap: wrap;
    }
`

const Character = props => {

    const { info } = props

    return (
          <StyledCharacter>
            <h2>{info.name}</h2>
            <div className='info-container'>
                <p>Gender: {info.gender}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Birth Year: {info.birth_year}</p>
            </div>
            <div className= 'movie-list'>
            {info.films.map(star => {
          return <Movie key={star} info={star.slice(27,28)} />
        })}
            </div>
            
        </StyledCharacter>
        
        
        
        )
}

export default Character