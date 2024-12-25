import React, { useState } from 'react'
import RepoBoxes from '../RepoBoxes/RepoBoxes'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import "./Repoistery.css"


let information = [
    {
        id: 0,
        name: "desing-system",
        access: "Public",
        language: "React",
        storage: "7320KB",
        updation_date: "Updated 1 day ago"
    },
    {
        id: 1,
        name: "codeant-ci-app",
        access: "Private",
        language: "JavaScript",
        storage: "5871KB",
        updation_date: "Updated 2 day ago"
    },
    {
        id: 2,
        name: "mobile-app",
        access: "Public",
        language: "Swift",
        storage: "3096KB",
        updation_date: "Updated 3 day ago"
    },

    {
        id: 3,
        name: "e-commerce-platform",
        access: "Pivate",
        language: "Java",
        storage: "6210KB",
        updation_date: "Updated 6 days ago"

    },
    {
        id: 4,
        name: "blog-website",
        access: "Public",
        language: "HTML/CSS",
        storage: "1876KB",
        updation_date: "Updated 4 days ago"
    },
    {
        id: 5,
        name: "social-network",
        access: "Private",
        language: "PHP",
        storage: "5432KB",
        updation_date: "Updated 7 days ago"
    }
]

const Repoistery = () => {
    const [showMenu, setShowMenu] = useState(false);
    

    const handleOpenMenu = ()=>{
        setShowMenu(!showMenu);
    }

    const handleOpenMenuClose = ()=>{
         setShowMenu(!showMenu)
    }

    return (
        <>
            <div className='repo_main_container'>

                <div className='left'>
                    <div className='top_heading'>

                        <div className=' mobile_design3'>
                            <div className='top_heading_bottom'>
                                <div className='img_container'>
                                    <img src="/images/Subtract.png" />
                                </div>
                                <div className='top_text'>
                                    CodeAnt AI
                                </div>
                            </div>

                            <div className='mobile_burgerIcon'>
                              {
                                showMenu ? <GiHamburgerMenu onClick={handleOpenMenu} />:
                                <IoMdClose onClick={handleOpenMenuClose} />

                              }  
                            </div>
                        </div>


                        <div className='combo_box'>
                            <p>Utkarsh Bro</p>
                            <img src="/images/downarrow.svg" />
                        </div>
                    </div>
                    <div>

                    </div>

                    <div className={showMenu ? "hide_content": "mobile_menu_design"}>
                        <div className='center_container mobile_design'>

                            <div className='box first_box'>
                                <div>
                                    <img src="/images/first.svg" />
                                </div>
                                <div className='text-content first_box_text'>
                                    <span>Repositories</span>
                                </div>

                            </div>
                            <div className='box'>
                                <div>
                                    <img src="/images/second.svg" />
                                </div>
                                <div className='text-content'>
                                    <span>AI Code Review</span>
                                </div>
                            </div>
                            <div className='box'>
                                <div>
                                    <img src="/images/third.svg" />
                                </div>
                                <div className='text-content'>
                                    <span>Cloud Security</span>
                                </div>
                            </div>
                            <div className='box'>

                                <div>
                                    <img src="/images/fourth.svg" />
                                </div>

                                <div className='text-content'>
                                    <span>How to Use</span>
                                </div>

                            </div>
                            <div className='box'>
                                <div className='text-content'>
                                    <img src="/images/fifth.svg" />
                                </div>
                                <div className='text-content'>
                                    <span>Setting</span>
                                </div>
                            </div>
                        </div>


                        <div className='bottom_container mobile_design2 '>
                            <div className='box'>
                                <div>
                                    <img src="/images/call.svg" />
                                </div>
                                <div className='text-content'>
                                    <span>Support</span>
                                </div>
                            </div>
                            <div className='box'>
                                <div>
                                    <img src="/images/logout.svg" />
                                </div>
                                <div className='text-content'>
                                    <span>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='right'>
                    <div className='right_container'>
                        <div className='main_repo '>
                            <div className='repo-box'>
                                <div>
                                    <h2>Repositories</h2>
                                    <p>33 Repositories</p>
                                </div>
                                <div className='buttons'>
                                    <button className='refresh-button'>
                                        <img src="/images/refresh.svg" />
                                        <span>
                                            Refresh All
                                        </span>
                                    </button>
                                    <button className='add-repo'>
                                        <img src="/images/addition.svg" />
                                        <span>
                                            Add Repositories
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="search_boxes">
                                <img src="/images/search.svg" />
                                <input className='search_box' type="text" placeholder='Search Repositories' />
                            </div>
                        </div>
                        {
                            <RepoBoxes users={information} />
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Repoistery   