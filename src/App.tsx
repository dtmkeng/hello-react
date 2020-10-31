import React from 'react';
import './App.css';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


function App() {
  return (
    <div>
      <div className="mx-3 my-4 flex flex-col w-1/4">
        <label htmlFor="firstname">First Name</label>
        <input type="text" className="border-2 rounded-lg p-1" name="firstname"/>
        <label htmlFor="firstname">Last Name</label>
        <input type="text" className="border-2 rounded-lg p-1" name="firstname"/>
        <label htmlFor="firstname">Age</label>
        <input type="text" className="border-2 rounded-lg p-1" name="firstname"/>
        <Title/>
        <Wrapper/>
      </div>
    </div>
  );
}

export default App;
