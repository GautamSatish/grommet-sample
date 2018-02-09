import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Title from 'grommet/components/Title';
import TextInput from 'grommet/components/TextInput';
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

  _onChangeUser(event) {
    this.setState({ user: event.target.value });
  }

  render() {
    return (
      <App centered={false}>
        <Box full={true}>
          <Header direction='row' justify='between'
            pad={{ horizontal: 'medium' }}>
            <Title>Todo App</Title>
            <Accordion>
              <AccordionPanel heading={this.state.user}>
                <Box>
                  <Form>
                    <FormField label='Enter new User'>
                      <TextInput id='newUser' onDOMChange={this._onChangeUser} />
                    </FormField>
                  </Form>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Header>
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
