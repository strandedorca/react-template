import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {

}

const Header = () => {
  return (
    <>
        <div className="navbar px-5 bg-primary text-white">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div className="me-5">
                <FontAwesomeIcon icon="users" className="me-3"/>
                Customer Manager
              </div>
              <div>
                <button className="btn me-3 text-white">Customers</button>
                <button className="btn text-white">Settings</button>
              </div>
            </div>
            <a>
              {
                'Login'
              }
            </a>
          </div>
        </div>
        
    </>
  )
}

export default Header;