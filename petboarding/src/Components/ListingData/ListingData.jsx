import { useParams } from "react-router-dom";

export const ListingData = () => {
    let {id}=useParams();
    return (
        <div>
            <h1>Listing Data</h1>
        </div>
    )
}