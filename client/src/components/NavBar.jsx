import React from 'react';
import { Input, Menu, Image, Button, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import defaultPhoto from '../images/defaultPhoto.jpg';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeItem: 'home',
    };

    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
    };

    this.onHome = this.onHome.bind(this);
    this.onNewTopic = this.onNewTopic.bind(this);
  }

  onHome() {
    this.props.history.push('/');
    this.props.home();
  }

  onNewTopic() {
    this.props.history.push('/share');
    this.props.createNewTopic();
  }

 


  render() {
    const { activeItem } = this.state;
    let name = (this.props.currentUser && (this.props.currentUser.fullName || this.props.currentUser.username) || '');
    let photoUrl = (this.props.currentUser && this.props.currentUser.photo) || defaultPhoto;

    const trigger = (
      <span>
        <Image avatar src={photoUrl} /> {name}
      </span>
    )

    return (
      <Menu attached='top' className='nav'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.onHome} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary onClick={this.onNewTopic}>Create Topic</Button>
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Dropdown trigger={trigger} item simple>
              <Dropdown.Menu>
              <Dropdown.Item as='a' href='/login' >Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

