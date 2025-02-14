import React from 'react';
import styled from 'styled-components';
import './Menu.css';

const StyledWrapper = styled.div``;

const menu = (props) => {

    return (
        <StyledWrapper>
            <div className="card">
                <div className="first-content">
                    <span>
                        <a className='d-flex justify-content-center' href="">
                            <img className='imagen' src={props.imagen} alt="" />
                        </a>
                    </span>
                </div>
                <div className="second-content">
                    <span>{props.texto}</span>
                </div>
            </div>
        </StyledWrapper>
    );
}

export default menu;