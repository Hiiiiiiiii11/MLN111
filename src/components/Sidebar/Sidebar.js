// Sidebar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Sidebar.css";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageApp } from "../../actions/appActions"; // Điều chỉnh đường dẫn phù hợp
import { LANGUAGES } from "../../utils/constant";
import logo from '../../assests/logo.jpg'

// Import các file dịch
import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";

const Sidebar = ({ isOpen, onSelect, role }) => {
    const [selected, setSelected] = useState(``);
    const navigate = useNavigate();
    const [isTrainerMenuOpen, setIsTrainerMenuOpen] = useState(false);
    const dispatch = useDispatch();

    // Lấy ngôn ngữ hiện tại từ Redux store.
    // Nếu store chỉ có reducer đơn, state.language; nếu dùng combineReducers thì chỉnh lại thành state.app.language.
    const language = useSelector((state) => state.language);

    // Lấy nội dung menu dựa theo ngôn ngữ hiện tại.
    const labels = language === LANGUAGES.EN ? enTranslations.sidebar : viTranslations.sidebar;

    const handleClick = (item) => {
        setSelected(item);
        onSelect(item);
        // Nếu cần điều hướng: navigate(`/layout/${role}/${item}`);
    };

    useEffect(() => {
        if (!isOpen) {
            setSelected('');
            setIsTrainerMenuOpen(false);
        }
    }, [isOpen]);

    // Hàm xử lý chuyển đổi ngôn ngữ khi nhấn "VN" hoặc "EN"
    const handleLanguageChange = (newLang) => {
        dispatch(changeLanguageApp(newLang));
        console.log("Language changed to:", newLang);
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="sidebar-logo">
                <img src={logo} />
            </div>
            <ul className="sidebar-menu">
                <li onClick={() => handleClick('side-bar1')}>
                    {isOpen && (
                        <span className={selected === 'side-bar1' ? 'selected' : ''}>
                            {labels["side-bar1"]}
                        </span>
                    )}
                </li>
                <li onClick={() => handleClick('side-bar2')}>
                    {isOpen && (
                        <span className={selected === 'side-bar2' ? 'selected' : ''}>
                            {labels["side-bar2"]}
                        </span>
                    )}
                </li>
                <li onClick={() => handleClick('side-bar3')}>
                    {isOpen && (
                        <span className={selected === 'side-bar3' ? 'selected' : ''}>
                            {labels["side-bar3"]}
                        </span>
                    )}
                </li>
                <li onClick={() => handleClick('side-bar4')}>
                    {isOpen && (
                        <span className={selected === 'side-bar4' ? 'selected' : ''}>
                            {labels["side-bar4"]}
                        </span>
                    )}
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;
