import React, { useState, useContext } from "react"
import MusicList from "../components/data-display/musicList/musiList"
import AudioPlayer from "../components/data-display/audioPayer/audioPlayer"
import styles from "./index.module.css"
import { AppContext } from "../../App"


export default function Index() {
    const { time, setTime, selecteMusic, musicList, selectedMusic } = useContext(AppContext);

    return (
        <>
            <div className={styles['page-container']}>
                <MusicList
                    musics={musicList}
                    selectedMusic={selectedMusic}
                    onSelect={selecteMusic}
                />
                <AudioPlayer music={selectedMusic} onComplete={() => console.log('Finished')} />
            </div>
        </>
    )
}