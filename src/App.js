import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Layout } from 'antd';
import Project from "./pages/Project";
import Resume from "./pages/Resume";
const { Header, Content } = Layout;

function App() {
  return (

    <Layout>
      <Router className="App">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Navbar />
        </Header>
        <Content style={{ margin: "75px" }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/project/:name">
              <Project/>
            </Route>
            <Route exact path="/resume">
                <Resume/>
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;