import { useContext } from 'react';
import UserContext from '../../../context/userContext';

function AdminProfile() {
  const { admin } = useContext(UserContext);

  return (
    <>
      <div>
        <div>
          <div className="w-full h-full">
            <img
              src={admin.profileImg.url}
              alt="admin"
              className=" w-auto h-44 m-auto rounded-xl border p-1"
            />
          </div>
          <hr className="text-white" />
          <div className="text-white">
            <h4>
              <strong>Name:&nbsp;&nbsp;</strong>
              {admin.name}
            </h4>
            <h4>
              <strong>Email ID:&nbsp;&nbsp;</strong>
              {admin.email}
            </h4>
            <h4>
              <strong>Role:&nbsp;&nbsp;</strong>
              {admin.role}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;
