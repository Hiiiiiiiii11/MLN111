import React from 'react';
import '../Home/style.css'
import { changeLanguageApp } from "../../actions/appActions"; // Điều chỉnh đường dẫn phù hợp
import { LANGUAGES } from "../../utils/constant";
import { useDispatch, useSelector } from 'react-redux';

import enTranslations from "../../translations/en.json";
import viTranslations from "../../translations/vn.json";
const Develop = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    const labels = language === LANGUAGES.EN ? enTranslations.homecontent : viTranslations.homecontent;


    const handleLanguageChange = (newLang) => {
        dispatch(changeLanguageApp(newLang));
    };
    return (
        <div>
            <div className='develop-page'>
                <div className='develop-container'>
                    <div className='develop-background'>
                        <div>
                            <span>
                                <h1>
                                    {labels["developprinciple"]}
                                </h1>
                            </span>
                        </div>
                        <div className='develop-group-content'>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-content1"]}
                                    </li>
                                </span>
                            </div>

                            <div>
                                <span>
                                    <li>
                                        {labels["develop-content2"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-content3"]}
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='develop-content'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-title1"]}
                                </h1>
                            </span>
                        </div>
                        <div className='develop-group-sub-content'>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-sub-content1"]}
                                    </li>
                                </span>
                            </div>

                            <div>
                                <span>
                                    <li>
                                        {labels["develop-sub-content2"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-sub-content3"]}
                                    </li>
                                </span>
                            </div>
                        </div>

                        <div>
                            <span>
                                <ul>
                                    {labels["develop-sub-content4"]}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='develop-contentadd1'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-titleadd"]}
                                </h1>
                            </span>
                        </div>

                        <div>
                            <span>
                                <li>
                                    {labels["develop-titleadd-content1"]}
                                </li>
                                <ul>
                                    {labels["develop-titleadd-sub-content1"]}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='develop-contentadd2'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-titleadd"]}
                                </h1>
                            </span>
                        </div>

                        <div>
                            <span>
                                <li>
                                    {labels["develop-titleadd-content2"]}
                                </li>
                                <ul>
                                    {labels["develop-titleadd-sub-content2"]}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='develop-contentadd3'>

                        <div>
                            <span>
                                <h1>
                                    {labels["develop-titleadd"]}
                                </h1>
                            </span>
                        </div>

                        <div>
                            <span>
                                <li>
                                    {labels["develop-titleadd-content3"]}
                                </li>
                                <ul>
                                    {labels["develop-titleadd-sub-content3"]}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='develop-contentadd4'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-titleadd"]}
                                </h1>
                            </span>
                        </div>
                        <div>
                            <span>
                                <li>
                                    {labels["develop-titleadd-content4"]}
                                </li>
                                <ul>
                                    {labels["develop-titleadd-sub-content4"]}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className='develop-contentadd5'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-titleadd2"]}
                                </h1>
                            </span>
                        </div>
                    </div>
                    <div className='develop-content2'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-title2"]}
                                </h1>
                            </span>
                        </div>
                        <div className='develop-title-sub-content'>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-title2-sub-content1"]}
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-title2-sub-content2"]}
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-title2-sub-content3"]}
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className='develop-title-sub-sub-content'>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-title2-sub-sub-content1"]}
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-title2-sub-sub-content2"]}
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <ul>
                                        {labels["develop-title2-sub-sub-content3"]}
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='develop-content3'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-title3"]}
                                </h1>
                            </span>
                        </div>
                        <div className='develop-title3-sub-content'>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-title3-sub-content1"]}
                                    </li>
                                    <ul>
                                        {labels["develop-title3-sub-sub-content1"]}
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-title3-sub-content2"]}
                                    </li>
                                    <ul>
                                        {labels["develop-title3-sub-sub-content2"]}
                                    </ul>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='develop-content4'>
                        <div>
                            <span>
                                <h1>
                                    {labels["develop-title4"]}
                                </h1>
                            </span>
                        </div>
                        <div className='develop-title4-sub-content'>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-title4-sub-content1"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-title4-sub-content2"]}
                                    </li>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <li>
                                        {labels["develop-title4-sub-content3"]}
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

export default Develop;