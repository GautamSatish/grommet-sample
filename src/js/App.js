import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import TodoAppDashboard from './components/TodoAppDashboard';

export default class SampleApp extends Component {

  constructor(props) {
    super(props);

    this._onChangeUser = this._onChangeUser.bind(this);
    this.render = this.render.bind(this);

    this.state = {
      user: 'gautam'
    };
  }

  /*
  _onChangeUser() {
    Use event.target.value
  }
  */

  render() {
    return (
      <App centered={false}>
        <Box full={true}>
          <Header direction='row' justify='between'
            pad={{ horizontal: 'medium' }}>
            <Title>Todo App</Title>
          </Header>
          {/* Add your component here. */}
          <TodoAppDashboard user={this.state.user} />
          <Footer primary={true} appCentered={true} direction='column'
            align='center' pad='small' colorIndex='grey-1'>
            <p>
              Build your ideas with <Anchor href='http://grommet.io' target='_blank'>Grommet</Anchor>!
            </p>
          </Footer>
        </Box>
      </App>
    );
  }
}
