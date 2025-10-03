import React from "react";
import { Link } from "react-router-dom";
import { BsFillCarFrontFill } from "react-icons/bs";


function Navbar() {
  return (
    
    		<div className="w-full flex flex-col text-white bg-gray-900 overflow-hidden">
			<div className="m-4 w-full lg:px-[310px] px-1 flex items-center gap-5 justify-between ">
        <div className="flex justify-items-center items-center gap-3">
      <BsFillCarFrontFill className="text-2xl" />
				<Link to='/'><h1 className="font-semibold whitespace-nowrap">Rentora Drive</h1></Link>
        </div>
        
        <div className="flex mr-6">
           <nav className="flex md:flex md:flex-grow flex-row-reverse space-x-1 gap-5">
       
         <div className="hidden lg:flex items-center justify-between gap-5">
  <Link to="/home" className="hover:underline hover:text-blue-600 transition-colors">
    Home
  </Link>
  <Link to="/about" className="hover:underline hover:text-blue-600 transition-colors">
    About
  </Link>
  <Link to="/contact" className="hover:underline hover:text-blue-600 transition-colors">
    Contact
  </Link>
</div>
 </nav>
      </div>
</div>

    </div>
    
    // <>  <h1 className="text-xl font-bold"> Rentora Drive</h1>
    // <nav className="flex md:flex md:flex-grow flex-row-reverse space-x-1">
       
    //      <div className="space-x-4">
            
    //    <Link to="/" className="hover:underline">Home</Link>
    //    <Link to="/about" className="hover:underline">About</Link>
    //   <Link to="/contact" className="hover:underline">Contact</Link>
    //      </div>
    //      </nav>
    // </>
       
  );
}

export default Navbar;
//    import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// function Navbar() {
//      return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
    //export default Navbar;
    
    
    
    // src/components/Navbar.jsx


    // import React from 'react';
    // import { Link } from 'react-router-dom'; // If using React Router

    // const Navbar = () => {
    //   return (
    //  
    //   );
    // }

    // export default Navbar;