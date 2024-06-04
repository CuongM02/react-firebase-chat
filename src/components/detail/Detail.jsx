import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h3>Jane Doe</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./duckduck.png" alt="" />
                                <span>photo_2024_1.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"  />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./moto.png" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"  />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./duckduck.png" alt="" />
                                <span>photo_2024_3.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"  />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./car.png" alt="" />
                                <span>photo_2024_4.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"  />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./duckduck.png" alt="" />
                                <span>photo_2024_5.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"  />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
            <button>Block User</button>
            <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Detail
