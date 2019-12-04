import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home.jsx'
import Login from '../containers/Login.jsx'
import Register from '../containers/Register.jsx'
import NotFound from '../containers/NotFound.jsx'
import Layout from '../components/Layout.jsx'
import Player from '../containers/Player.jsx'

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component = { Home } />
                <Route exact path="/login" component = { Login } />
                <Route exact path="/register" component = { Register } />
                <Route exact path="/player/:id" component={Player}></Route>
                <Route component = { NotFound } />
            </Switch>
        </Layout>
    </Router>
)

export default App