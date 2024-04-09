// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function GetById() {
//   const [data, setData] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:5000/" + id)
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         setData(res);
//       });
//   }, [id]);

//   return (
//     <>
//       <div>{data._id}</div>
//       <div>{data.profileID}</div>
//       <div>{data.username}</div>
//       <div>{data.bio}</div>
//       <div>{data.followersCount}</div>
//       <div>{data.followingCount}</div>
//     </>
//   );
// }
