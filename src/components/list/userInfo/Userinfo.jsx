import "./userInfo.css"

const Userinfo = () => {
    return (
        <div className='userInfo'>
            <div className="user">
                <img src="./avatar.png" alt=""></img>
                <h3>Join Doe</h3>
            </div>
            <div className="icon">
                <img src="./more.png" alt=""/>
                <img src="./video.png" alt=""/>
                <img src="./edit.png" alt=""/>
            </div>
        </div>
    )
}

export default Userinfo