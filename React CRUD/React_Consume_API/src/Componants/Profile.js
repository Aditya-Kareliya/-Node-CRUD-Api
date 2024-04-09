import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

export default function Profile() {
    // const [addInfo,setAddInfo] = useState({
    //         profileID : 0,
    //         username : '',
    //         bio : '',
    //         followersCount : 0,
    //         followingCount : 0
    // });

    // const [updateData,setUpdateData] = useState({
    //     profileID : 0,
    //     username : '',
    //     bio : '',
    //     followersCount : 0,
    //     followingCount : 0
    // });

    const [data, setData] = useState([]);
    const [ adddata , setAddData ] = useState({
        profileID : 0,
        username : '',
        bio : '',
        followersCount : 0,
        followingCount : 0
    })
    const [id, setId] = useState(0)
    const [username, setUserName] = useState('');
    const [bio, setBio] = useState('');
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount,setFollowingCount] = useState(0);
    const [isUpdate,setIsUpdate] = useState(false);

    // const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setData(res);
        });
    }, [isUpdate]);
    
    // Add Data Mate
    const addData = async ()=>{
        await setAddData({
            ...addData,
            profileID:id,
            username : username,
            bio : bio,
            followersCount : followersCount,
            followingCount : followingCount
        });
        console.log(addData);
        fetch("http://localhost:5000/add",{
            method:"POST",
            body:JSON.stringify(adddata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
            console.log(res);
            setIsUpdate(true);
        })
        clearData()
        window.location.reload()
    }
    
    //  Update Data Mate jayre edit button pr click thy tyre aa button 
    // visible thave joi e ane aa button pr click thy tyre data update thvao joi e
    
    // const updatedata = async ()=>{
    //     await setUpdateData({
    //         ...addData,
    //         profileID:id,
    //         username : username,
    //         bio : bio,
    //         followersCount : followersCount,
    //         followingCount : followingCount
    //     })
    //     fetch("http://localhost:5000/:id",{
    //         method : "PATCH",
    //         body : JSON.stringify(updateData),
    //         headers:{
    //             "Content-Type" : "application/json"
    //         }
    //     })
    //     .then((res) => {
    //         setIsUpdate(false)
    //     })
    //     clearData()
    // }
    
    
    // Delete Button Mate
    const deletedata = (id) => {
        fetch(`http://localhost:5000/items/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Failed to delete item');
        })
        .then((data) => {
            alert("Delete Successfully");
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to delete item");
        });
    }
    
    // Edit Button Mate
    const editdata = (id)=>{
        const index = data.find((item)=> item.profileID === id);
        setId(id);
        setUserName(index.username);
        setBio(index.bio);
        setFollowersCount(index.followersCount);
        setFollowingCount(index.followingCount);
        setIsUpdate(true);
    }
    
    // Clear Data Mate
    const clearData = ()=>{
        setAddData({
            profileID : 0,
            username : '',
            bio : '',
            followersCount : 0,
            followingCount : 0
        })
    }

    // const [items, setItems] = useState([]);

    // const fetchItems = async () => {
    //     const response = await axios.get('/items');
    //     setItems(response.data);
    //   };

    // const deleteItem = async (id) => {
    //     try {
    //       await axios.delete(`/items/${id}`);
    //       // After deleting, fetch updated items
    //       fetchItems();
    //     } catch (error) {
    //       console.error('Failed to delete item:', error);
    //     }
    //   };

    
    // data vara farthi aave e mate map method
    const temp = data.map((item, index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.profileID}</td>
                    <td>{item.username}</td>
                    <td>{item.bio}</td>
                    <td>{item.followersCount}</td>
                    <td>{item.followingCount}</td>
                    <td>&nbsp;
                        <button type="button" 
                                class="btn btn-primary m-1" 
                                onClick={editdata}>Edit</button> &nbsp;
                        <button type="button" 
                                // key={items._id}
                                class="btn btn-danger m-1" 
                                onClick={
                                    deletedata
                                    // deleteItem(item._id)
                                }>Delete</button>&nbsp;
                    </td>
                </tr>
            </>
        )
    })
                            
  return (
    <>
        {/* Form Mate */}
        <form class="container">
            <div class="card m-3">
                <div class="card-header text-center fw-3 text-uppercase fs-3">Add Profiles</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <input  type="text" 
                                    class="form-control" 
                                    placeholder="Enter Profile Id" 
                                    value={adddata.profileID} 
                                    required 
                                    onChange={(e) => {
                                        setAddData({ ...adddata, profileID: e.target.value });
                            }}/>
                        </div>
                        <div class="col">
                            <input type="text" 
                                    class="form-control" 
                                    placeholder="Enter User Name" 
                                    value={adddata.username}  
                                    onChange={(e) => {
                                        setAddData({ ...adddata, username: e.target.value });
                            }}/>
                        </div>
                        <div class="col">
                            <textarea   class="form-control" 
                                        rows="1" cols="10"
                                        placeholder="Enter Bio" 
                                        id="floatingTextarea" 
                                        value={addData.bio} 
                                        onChange={(e) => {
                                            setAddData({ ...adddata, bio: e.target.value });
                            }}></textarea>
                        </div>
                        <div class="col-2">
                            <input type="text" 
                                class="form-control" 
                                placeholder="Enter Followers Count" 
                                value={adddata.followersCount} 
                                onChange={(e) => {
                                    setAddData({ ...adddata, followersCount: e.target.value });
                            }}/>
                        </div>
                        <div class="col-2">
                            <input  type="text"zz
                                    class="form-control" 
                                    placeholder="Enter Following Count" 
                                    value={adddata.followingCount} 
                                    onChange={(e) => {
                                        setAddData({ ...adddata, followingCount: e.target.value });
                            }}/>
                        </div>
                        <div class="col">
                            <button type="button" 
                                    class="btn btn-primary m-1" 
                                    onClick={()=>{
                                        addData();
                            }}>
                            Add</button>&nbsp;&nbsp;&nbsp;
                            <button type="button" 
                                    class="btn btn-primary" 
                                    onClick={clearData}>
                            Clear</button>&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </form>

        {/* Table Mate */}
        <table className="container mt-5 mb-5 table table-hover table-bordered">
            <thead>
                <tr>
                    <th className="text-center text-uppercase bg-light">Sr No.</th>
                    <th className="text-center text-uppercase bg-light">Profile ID</th>
                    <th className="text-center text-uppercase bg-light">User Name</th>
                    <th className="text-center text-uppercase bg-light">Bio</th>
                    <th className="text-center text-uppercase bg-light">Followers Count</th>
                    <th className="text-center text-uppercase bg-light">Following Count</th>
                    <th colSpan="2" className="text-center text-uppercase bg-light">Operations</th>
                </tr>
            </thead>
            <tbody>
                {temp}
            </tbody>
        </table>
    </>
  );
}