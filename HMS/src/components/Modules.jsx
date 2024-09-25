import '../design/Modules.css';

function Modules(){
    return(
        <>
        <div className="mod">
            <div className="card">
                <img className="card-image" src="https://via.placeholder.com/150" alt="photocard"></img>
                <h2 className="cardtext1">Laboratory Services</h2>
             </div>

            <div className="card">
                <img className="card-image" src="https://via.placeholder.com/150" alt="photocard"></img>
                <h2 className="cardtext">Therapeutic Services</h2>
            </div>

            <div className="card">
                <img className="card-image" src="https://via.placeholder.com/150" alt="photocard"></img>
                <h2 className="cardtext">Medication Services</h2>
            </div>
        </div>
        </>
    )
}
export default Modules