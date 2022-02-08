export default function Loader({ show }){
    return show ? 
    <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div> 
    : null;
}