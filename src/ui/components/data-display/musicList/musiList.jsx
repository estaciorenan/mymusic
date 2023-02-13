import styles from "./musicList.module.css";
import { TimeService } from "../../../../data/service/timeService";

export default function MusicList(props) {

    function isSelected(music) {
        return props.selectedMusic === music ? styles['selected'] : '';
    }

    return (
        <>
            <ul className={styles['music-list']}>
                {props?.musics.map((music) => (
                    <li 
                    className={[styles['music-list-item'], isSelected(music)].join(" ")}
                    onClick={()=>props?.onSelect(music)}
                    >
                        <div className={styles['information']}>
                            <span className={styles['title']}>{music?.name}</span>
                            <span className={styles['artist']}>{music?.artist}</span>
                            <span className={styles['time']}>{TimeService.timeDisplay(music?.time)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}