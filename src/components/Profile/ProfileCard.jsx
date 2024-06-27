import React from 'react';
import { doSignOut } from '../../firebase/auth';

const ProfileCard = () => {
  return (
    <div className="card w-full h-[376px] bg-neutral-800 shadow-xl">
      <figure>
          {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          {/* <img src="https://portfolio-fu-yanyuan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffu.494bbc40.jpg&w=3840&q=75" /> */}
          <img src="https://htmlcolorcodes.com/assets/images/colors/moss-green-color-solid-background-1920x1080.png" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Karush1fa</h2>
        <p>3 leetcodes per day, No Excuses</p>
        <div className="card-actions">
          <button className="btn btn-primary">Feature</button>
          <button className="btn btn-secondary" onClick={() => doSignOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;