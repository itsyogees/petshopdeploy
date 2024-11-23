'use client';
import React from "react";
import { IoIosArrowForward, IoIosHelpCircleOutline } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CiSettings, CiLogout } from "react-icons/ci";
import { useRouter } from "next/navigation";

const ProfileMenu = () => {
    const router = useRouter();

    const handleHistoryClick = () => {
        router.push("/pages/Profile/OrderHistory");
    };

    const handleVendorClick = () => {
        router.push("/pages/Profile/BecomeVendor");
    };

    const handlePrivacyClick = () => {
        router.push("/pages/Profile/PrivacyPolicy");
    };

    const handleHelpClick = () => {
        router.push("/pages/Profile/Help");
    };

    return (
        <div className="profile-menu">
            <div className="profile-container">
                <div className="profile-header">
                    <img
                        src="/image/profile.png"
                        alt="User"
                        className="profile-image"
                    />
                    <div className="profile-info">
                        <div className="profile-name-container">
                            <p className="profile-name">John Rebecca</p>
                        </div>
                        <div className="profile-expand-button-container">
                            <button className="profile-expand-button">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="menu-list">
                    <div className="menu-item" onClick={handleHistoryClick}>
                        <GoHistory /> Orders History
                    </div>
                    <div className="menu-item" onClick={handleVendorClick}>
                        <FaRegUser /> Become a Vendor
                    </div>
                    <div className="menu-item" onClick={handlePrivacyClick}>
                        <MdOutlinePrivacyTip /> Privacy and Policy
                    </div>
                    <div className="menu-item" onClick={handleHelpClick}>
                        <IoIosHelpCircleOutline /> Help
                    </div>
                    <div className="menu-item">
                        <CiSettings /> Settings
                    </div>
                </div>
                <div className="menu-list">
                    <div className="menu-item">
                        <CiLogout /> Logout
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
