import React from 'react';
import { doSignOut } from '../../firebase/auth';

const Profile = () => {
  return (
    <div className="card card-side h-full w-full bg-neutral-800 shadow-lg">
      <div className="avatar cursor-pointer">
        <div className="w-16 rounded-xl">
          <img src="https://htmlcolorcodes.com/assets/images/colors/moss-green-color-solid-background-1920x1080.png" />
        </div>
      </div>
      <div className="card-body text-neutral-300 p-4">
        <h2 className="card-title">Karush1fa</h2>
        <p>3 leetcodes per day, No Excuses !!!</p>
        {/* <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea> */}
        <div className="card-actions justify-end items-center">
          <div className='w-18 flex justify-between'>
            <div className="btn btn-ghost btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" className="p-[2px] inline-block shrink-0 fill-none stroke-current">
                <path fill='#D4D4D4' d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="logout">
              <div className="btn btn-ghost btn-circle btn-sm" onClick={() => doSignOut()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" className="p-[2px] inline-block shrink-0 fill-none stroke-current">
                  <path fill="#D4D4D4" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile