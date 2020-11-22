import React from 'react';
import styled from 'styled-components';

const TitleComponent = styled.div.attrs({
    className: ''
})``;

interface Props {
    title: string;
}

const Title: React.FC<Props> = ({ title }) => {
    return (
        <TitleComponent>{title}</TitleComponent>
    )
}

export default Title;
