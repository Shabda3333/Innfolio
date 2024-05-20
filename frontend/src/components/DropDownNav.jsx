import React from "react";

const DropDownNav = () => {
    return (
        <div className=" flex flex-col">
            <ul className=" flex flex-col gap-4">
                <li>Edit Profile</li>
                <li>LogOut</li>
            </ul>
        </div>
    );
};

export default DropDownNav;
