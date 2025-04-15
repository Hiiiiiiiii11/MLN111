import React from 'react';
import '../Home/style.css'
import { changeLanguageApp } from "../../actions/appActions"; // Điều chỉnh đường dẫn phù hợp
import { LANGUAGES } from "../../utils/constant";
import { useDispatch, useSelector } from 'react-redux';

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
const Connect = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    const labels = language === LANGUAGES.EN ? enTranslations.homecontent : viTranslations.homecontent;


    const handleLanguageChange = (newLang) => {
        dispatch(changeLanguageApp(newLang));
    };
    return (
        <div>
            <div className='connect-page'>
                <div className='connect-container'>
                    <div className='connect-contentadd1'>
                        <div>
                            <span>
                                <h1>
                                    {labels["connect-titleadd1"]}
                                </h1>
                            </span>
                        </div>
                        <div className='connect-title-contentadd1'>
                            <div className='conect-title-sub-content'>
                                <span>
                                    <li>
                                        {labels["connect-titleadd1-content1"]}
                                    </li>
                                    <ul>
                                        {labels["connect-titleadd1-sub-content1"]}
                                    </ul>
                                </span>
                            </div>
                            <div className='conect-title-sub-content'>
                                <span>
                                    <li>
                                        {labels["connect-titleadd1-content2"]}
                                    </li>
                                    <ul>
                                        {labels["connect-titleadd1-sub-content2"]}
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='connect-background'>

                        <div className='connect-contents'>
                            <div>
                                <span>
                                    <h1>
                                        {labels["connectprinciple"]}
                                    </h1>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-title1"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-title2"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-title3"]}
                                    </li>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='connect-content1'>
                        <div>
                            <span>
                                <h1>
                                    {labels["connect-title1"]}
                                </h1>
                            </span>
                        </div>
                        <div>
                            <span>
                                <ul>
                                    {labels["connect-content1"]}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='connect-content2'>
                        <div>
                            <span>
                                <h1>
                                    {labels["connect-title2"]}
                                </h1>
                            </span>
                        </div>
                        <div>
                            <span>
                                <li>
                                    {labels["connect-content2"]}
                                </li>
                            </span>
                        </div>
                    </div>
                    <div className='connect-content3'>
                        <div>
                            <span>
                                <h1>
                                    {labels["connect-title3"]}
                                </h1>
                            </span>
                        </div>
                        <div>
                            <span>
                                <ul>
                                    {labels["connect-content3"]}
                                </ul>
                            </span>
                        </div>
                        <div className='group-connect-sub'>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-subcontent1"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-subcontent2"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-subcontent3"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["connect-subcontent4"]}
                                    </li>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;