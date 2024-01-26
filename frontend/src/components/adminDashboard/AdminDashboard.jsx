import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <>
      <div className="bg-rose-500 h-full w-full">
        <div className="relative top-20 w-full h-full">
          <div className="d-flex gap-2 p-2">
            <div>
              <ul>
                <li>
                  <Link></Link>
                </li>
              </ul>
            </div>
            <div>Outlet</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
