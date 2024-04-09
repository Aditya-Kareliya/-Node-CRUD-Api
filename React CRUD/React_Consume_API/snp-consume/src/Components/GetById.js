import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function GetById() {
  const [snp, setSnp] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const apiURL = `http://localhost:3001/snp/${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Failed to fetch challenge");
        }
        const data = await response.json();
        setSnp(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [apiURL, params.id]);

  return (
    <>
      {/* <div>{data._id}</div>
      <div>{data.profileID}</div>
      <div>{data.username}</div>
      <div>{data.bio}</div>
      <div>{data.followersCount}</div>
      <div>{data.followingCount}</div> */}

      {/* This is my form for update the value of the fitness challenges */}
      <div class="card col-3 p-0 m-2 d-flex flex-grow-1">
        <div className="card-body">
          <h5 className="card-text ">Profile ID - {snp.profileID}</h5>
          <h5 className="card-text">Username - {snp.username}</h5>
          <h5 className="card-text">Bio - {snp.bio}</h5>
          <h5 className="card-text">Followers Count - {snp.followersCount}</h5>
          <h5 className="card-text">Following Count - {snp.followingCount}%</h5>
          <span>
            <button
              type="button"
              className="btn btn-danger"
              // There is an on onClick function to handle the click of the delete
            >
              Delete
            </button>
          </span>
          <span>
            <button
              type="button"
              className="ms-2 btn btn-primary"
              onClick={() => {
                navigate(`/snp/${snp.profileID}`);
              }}
            >
              Edit
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
