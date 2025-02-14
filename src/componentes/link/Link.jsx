import React from 'react';
import styled from 'styled-components';
import './Link.css';

const link = (props) => {

    const StyledWrapper = styled.div

    return (
        <StyledWrapper>
            <div className="card">
                <div className="first-content">
                    <span>
                        <a className='d-flex justify-content-center' href="">
                            <img src={props.imagen} alt="" />
                        </a>
                    </span>
                </div>
                <div className="second-content">
                    <span>{ṕrops.texto}</span>
                </div>
            </div>
        </StyledWrapper>
    );
}

export default link;