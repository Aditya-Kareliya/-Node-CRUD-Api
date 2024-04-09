//! This is my new logic for CRUD Operation
import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState([]);
  const [adddata, setAddData] = useState({
    profileID: "",
    username: "",
    bio: "",
    followersCount: "",
    followingCount: "",
  });
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  //? This will fetch all the updated data
  const fetchData = () => {
    fetch("http://localhost:3001/snp")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  //? This is the Add New Data function
  const addData = () => {
    fetch("http://localhost:3001/snp", {
      method: "POST",
      body: JSON.stringify(adddata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to add data");
      })
      .then((addedData) => {
        setData([...data, addedData]);
        setAddData({
          profileID: "",
          username: "",
          bio: "",
          followersCount: "",
          followingCount: "",
        });
      })
      .catch((error) => console.error("Error adding data:", error));
  };

  //? This will only set the data in the input field when click on this function
  const editData = (id) => {
    const index = data.find((item) => item.profileID === id);
    setId(id);
    setAddData({
      profileID: index.profileID,
      username: index.username,
      bio: index.bio,
      followersCount: index.followersCount,
      followingCount: index.followingCount,
    });
    setIsUpdate(true);
  };

  const updateData = () => {
    fetch(`http://localhost:3001/snp/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        profileID: id,
        username: adddata.username, // Use adddata.username instead of username
        bio: adddata.bio, // Use adddata.bio instead of bio
        followersCount: adddata.followersCount, // Use adddata.followersCount instead of followersCount
        followingCount: adddata.followingCount, // Use adddata.followingCount instead of followingCount
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setAddData({
          profileID: "",
          username: "",
          bio: "",
          followersCount: "",
          followingCount: "",
        });
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to update data");
      })
      .then(() => {
        fetchData();
        setIsUpdate(false);
        clearData();
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  const deleteData = (id) => {
    fetch(`http://localhost:3001/snp/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to delete data");
      })
      .then(() => {
        fetchData();
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const temp = data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.profileID}</td>
        <td>{item.username}</td>
        <td>{item.bio}</td>
        <td>{item.followersCount}</td>
        <td>{item.followingCount}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={() => editData(item.profileID)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => deleteData(item.profileID)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {/* //? This is the form Logic for inserting or or update data */}
      <form class="container">
        <div class="card m-3">
          <div class="card-header text-center fw-3 text-uppercase fs-3">
            {isUpdate ? "Update Profile" : "Add Profile"}
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Profile Id"
                  value={adddata.profileID}
                  required
                  onChange={(e) => {
                    setAddData({ ...adddata, profileID: e.target.value });
                  }}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter User Name"
                  value={adddata.username}
                  onChange={(e) => {
                    setAddData({ ...adddata, username: e.target.value });
                  }}
                />
              </div>
              <div class="col">
                <textarea
                  class="form-control"
                  rows="1"
                  cols="10"
                  placeholder="Enter Bio"
                  id="floatingTextarea"
                  value={adddata.bio}
                  onChange={(e) => {
                    setAddData({ ...adddata, bio: e.target.value });
                  }}
                ></textarea>
              </div>
              <div class="col-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Followers Count"
                  value={adddata.followersCount}
                  onChange={(e) => {
                    setAddData({ ...adddata, followersCount: e.target.value });
                  }}
                />
              </div>
              <div class="col-2">
                <input
                  type="text"
                  zz
                  class="form-control"
                  placeholder="Enter Following Count"
                  value={adddata.followingCount}
                  onChange={(e) => {
                    setAddData({ ...adddata, followingCount: e.target.value });
                  }}
                />
              </div>
              <div class="col">
                <button
                  type="button"
                  className="btn btn-primary m-1"
                  onClick={isUpdate ? updateData : addData}
                >
                  {isUpdate ? "Update" : "Add"}
                </button>
                &nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* //? This logic for Table to display the data */}
      <table className="container mt-5 mb-5 table table-hover table-bordered">
        <thead>
          <tr>
            <th className="text-center text-uppercase bg-light">Sr No.</th>
            <th className="text-center text-uppercase bg-light">Profile ID</th>
            <th className="text-center text-uppercase bg-light">User Name</th>
            <th className="text-center text-uppercase bg-light">Bio</th>
            <th className="text-center text-uppercase bg-light">
              Followers Count
            </th>
            <th className="text-center text-uppercase bg-light">
              Following Count
            </th>
            <th colSpan="2" className="text-center text-uppercase bg-light">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>{temp}</tbody>
      </table>
    </>
  );
}
