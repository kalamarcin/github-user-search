import axios from 'axios'
import { GlobalStoreContext } from '../../Store/GlobalStore'
import React, { useContext } from 'react' 
const API = 'https://api.github.com/users/'



const searchForJoined = () => {

    axios({
        method: 'get',
        url: `${API}${GlobalStore.userName}/created_at`,
    }).then((res) => {
        GlobalStore.changeJoined(res.data)
    })
}

export {
    searchForJoined,
}