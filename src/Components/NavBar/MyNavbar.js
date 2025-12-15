import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';

function MyNavbar({handleLogout}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">Study Buddy</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="MyCalender">Calender</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="MyToDoList">To-Do List</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="MyNotes">Notes</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                User Profile
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>User Information</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
          {/*
          <span className="navbar-text">
            Simple Text
          </span>        
          */}
          <Button onClick={handleLogout} color='primary' outline>Logout</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
