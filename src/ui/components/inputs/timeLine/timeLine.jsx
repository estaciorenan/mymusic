import styles from './timeLine.module.css';

export default function TimeLine(props) {

    return (
        <>
            <div className={styles['timeline-container']}>
                <div className={styles['timeline-line']}  style={{'--width': `${props?.width}%`}}/>
                <input type="range" className={styles['timeline-slider']} 
                onChange={(e)=> props?.onChangeWidth(e?.target?.value)}
                />

            </div>
        </>
    )
}