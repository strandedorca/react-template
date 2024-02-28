interface CardProps {

}

const Card = ({ customerName, city, stateName, avatar }) => {
  return (
    <div style={{ width: '20rem' }}>
      <div className="bg-primary text-white d-flex justify-content-between align-items-center ps-3">
        {customerName}
        <button className="btn btn-primary">Edit</button>
      </div>
      <div className="d-flex w-100">
        <img src={avatar} style={{ width: '7rem' }}/>
        <div>
            <p>{city}</p>
            <p>{stateName}</p>
            <a>Example Link</a>
        </div>
      </div>
    </div>
  )
}

export default Card;