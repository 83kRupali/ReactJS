

// export default Github
import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary') // ✅ Fixed URL
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then(data => setData(data))
    //         .catch(error => console.error("Error fetching GitHub data:", error)); // ✅ Error handling
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub Followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default Github


export const githubInfoLoader = async() =>{
    const response =  await fetch('https://api.github.com/users/hiteshchoudhary')

    //  const response =  await fetch('https://api.github.com/user/83kRupali')

    //83kRupali

    return response.json();
}