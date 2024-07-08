import React from 'react';
import { doSignOut } from '../../firebase/auth';

const Profile = () => {
  return (
    <div className="card card-side h-full w-full bg-neutral-800 shadow-lg">
      <div className="avatar">
        <div className="w-16 rounded-xl">
          <img src="https://htmlcolorcodes.com/assets/images/colors/moss-green-color-solid-background-1920x1080.png" />
        </div>
      </div>
      <div className="card-body text-neutral-300 p-4">
        <h2 className="card-title">Karush1fa</h2>
        <p>3 leetcodes per day, No Excuses</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary btn-xs">Feature</button> */}
          <button className="btn btn-secondary btn-xs" onClick={() => doSignOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile