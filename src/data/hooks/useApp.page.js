import { useState } from "react"
const musicList = [
    {
        id: 1,
        name: "Flertes",
        artist: "Banda Styllus",
        time: 95,
        url: "musics/Flertes.mp3"
    },
    {
        id: 2,
        name: "Felicidade",
        artist: "Banda Styllus",
        time: 135,
        url: "musics/Dor.mp3"
    }
]

export function useApp(){
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selecteMusic(music){
        setTime(0);
        setSelectedMusic(music)
    }

    return{
        musicList,
        time,
        setTime,
        selecteMusic,
        selectedMusic,
        musicList
    }
}