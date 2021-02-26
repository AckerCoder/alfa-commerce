import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const TopicList = (props) => {
  console.log(props.path);
  return(
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  )
};

const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL</h1>
  </div>
);

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </div>
  );
}

export default App;
