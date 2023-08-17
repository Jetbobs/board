import React, { useEffect, useState } from "react";
import axios from "axios";


const BoardList = () =>{

    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        const resp = (await axios.get('//localhost:8080/board')).data
        console.log(resp.data)
    }

    useEffect(()=>{
        getBoardList();
    }, []);

    return(
        <div>
            게시판 목록 출력
        </div>
    )
}

export default BoardList;