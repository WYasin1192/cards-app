import './App.css';
import React from "react";

import Main from './components/main/Main'
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <React.Fragment>
        <Layout>
          <Main/>
      </Layout>
    </React.Fragment>
  );
}

export default App;
