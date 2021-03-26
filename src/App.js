import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Layout } from 'antd';
import Project from "./pages/Project";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (

    <Layout>
      <Router className="App">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Navbar />
        </Header>
        <Content style={{ margin: "64px" }}>
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;