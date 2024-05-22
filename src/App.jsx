import { useState } from 'react';
import ViewPanel from './components/ViewPanel';
import Navbar from './components/Navbar';
function App() {
    return (
        <>
            <Navbar></Navbar>
            <ViewPanel />
        </>
    );
}

export default App;
