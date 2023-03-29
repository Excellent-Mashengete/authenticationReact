import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Avatar } from 'rsuite';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar>
      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
      
      <Nav pullRight className='navRight'>
        {!isLoggedIn
          ?
            < >
              <Nav.Item onClick={()=>{navigate('/auth/login')}}>Login</Nav.Item>
              <Nav.Item onClick={()=>{navigate('/auth/register')}}>Register</Nav.Item>
            </>
          :
            <Nav.Menu icon={<Avatar circle src="https://avatars.githubusercontent.com/u/12592949" alt="@SevenOutman" />} >
              <Nav.Item >Profile</Nav.Item>
              <Nav.Item>Logout</Nav.Item>
            </Nav.Menu> 
        }
      </Nav>
    </Navbar>
  )
}   
export default Navigation