import "./newUser.css";
import { useContext, useState } from "react";
import storage from "../../firebase"
import { createUser } from "../../context/userContext/apiCalls"; 
import { UserContext } from "../../context/userContext/UserContext"; 
import { useHistory } from "react-router-dom";

export default function NewUser() {

  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const history = useHistory()

  const {dispatch} = useContext(UserContext)

  const handleChange = (e) =>{
    const value = e.target.value;
    setUser({...user, [e.target.name]:value})
  }

  const upload = (items) => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done.");
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setUser((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  

  const handleUpload = (e) =>{
    e.preventDefault()
    upload([
      {file: profilePic, label: "profilePic"},
    ])
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createUser(user, dispatch);
    history.push("/users");
  } catch (err) {
    console.log(err);
  }
}; 

  console.log(user)

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="addProductItem">
          <label>Profile picture</label>
          <input type="file" id="profilePic" name="profilePic" onChange={(e)=>setProfilePic(e.target.files[0])}/>
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" placeholder="john" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Admin</label>
          <select className="newUserSelect" name="isAdmin" id="isAdmin" onChange={handleChange}>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>
        {uploaded === 1 ? (
          <button className="newUserButton" onClick={handleSubmit}>Create</button>
        ):(
          <button className="newUserButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
}
