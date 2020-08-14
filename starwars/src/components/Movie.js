// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'

//component styling
const StyledMovie = styled.div`
    width: 30%;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    margin: 0 auto; 
`

const Movie = props => {

    const { info } = props


    //just added
    const movies = ["A New Hope","Empire Strikes Back","Return of the Jedi","The Phantom Menace","Attack of the Clones","Revenge of the Sith"]

    return (

        <StyledMovie>
            <h3>{movies[parseInt(info)-1]}</h3>
        </StyledMovie>

    )
}

export default Movie