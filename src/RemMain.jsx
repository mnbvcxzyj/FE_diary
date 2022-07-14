import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rem from './Rem';
import items from './mock.json';

const RemMain = () => {
    return (
        <BrowserRouter>
          <Rem items={items}/>
        </BrowserRouter>
    );
};

export default RemMain;