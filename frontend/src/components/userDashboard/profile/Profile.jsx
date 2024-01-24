import { useContext } from 'react';
import UserContext from '../../../context/userContext';

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className="">
        <div className="w-1/2 m-auto ">
          <img
            src={user.profileImg.url}
            alt="error"
            className="rounded-3xl w-1/2 m-auto border p-1 shadow"
          />
        </div>
        <hr className="text-white" />
        <div className="text-white">
          <h4> Name: {user.name}</h4>
          <h4> EmailId: {user.email}</h4>
          <h4> Role: {user.role}</h4>
        </div>
      </div>
    </>
  );
}

export default Profile;
