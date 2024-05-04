import React from 'react'

const MyProfile = ({ params }) => {
    console.log(params);
    return (
        <div>myProfiles:{params.id}</div>
    )
}

export default MyProfile