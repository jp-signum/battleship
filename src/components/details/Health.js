import React from 'react';
import styled from 'styled-components';

const Hit = styled.span`
    color: red;
`

function Health({ health, hits }) {
    let healthCounter = [],
        hitscounter = [];

    for (let i = 0; i < health; i++) {
        healthCounter.push(
            (<span key={i}>O</span>)
        )
    }
    for (let j = 0; j < hits; j++) {
        hitscounter.push(
            (<Hit key={j}>X</Hit>)
        )
    }

    return (
        <span>
            {healthCounter}{hitscounter}
        </span>
    )
}

export default Health;