import { useParams } from "react-router-dom";

export const ListingData = () => {
    let {id}=useParams();
    return (
        <div>
            <h1>Listing Data</h1>
            <div>Boarding facilities you leave em we love them</div>
            <div>Number of pets that will be watched at one time : 10</div>
            <h3>Accepted Pet Types</h3>
            <div>Dog Cats Rabbits</div>
            <br/>
            <h3>Accepted Pet size</h3>
            <div>` 1-5kg {" "}

5-10kg

10-20kg

20-40kg

40+kg
40+kg `</div>
<h3>Level of adult supervision.</h3>
<div>Pets will never be left unattended</div>
<h3>The number of walks provided per day.</h3>
<div>22</div>


        </div>
    )
}