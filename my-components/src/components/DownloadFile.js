import React from 'react'

const DownloadFile = () => {
    const boyImage = "/media/boy.png";
    return (
        <div>
            <center>
            <img src={boyImage} alt="boy" height="250px" width="150px" /> <br />
            <a href={boyImage} className='btn btn-primary' download="krishna">Click Here to Download</a>
            </center>
        </div>
    )
}

export default DownloadFile
