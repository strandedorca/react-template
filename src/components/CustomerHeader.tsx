import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomerHeaderProp {

}

const CustomerHeader = () => {
  return (
    <div className="d-flex justify-content-between">
      {/* Button group */}
      <div className="btn-group">
        <button className="btn">
          <FontAwesomeIcon icon="layer-group" className="me-2" />
          Card View
        </button>
        <button className="btn">
        <FontAwesomeIcon icon="list" className="me-2" />
          List View
        </button>
        <button className="btn">
        <FontAwesomeIcon icon="plus" className="me-2" />
          New Customer
        </button>
      </div>
      {/* Filter */}
      <div className="">
        <form>
          <label htmlFor="filter" className="form-label">Filter</label>
          <input type="text" id="filter" name="filter" className="form-control" />
        </form>
      </div>
    </div>
  )
}

export default CustomerHeader;