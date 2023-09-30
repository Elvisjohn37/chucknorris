import React from 'react'
import styles from './JokePage.module.scss'
import { TailSpin } from 'react-loader-spinner'

const JokePage = ({ joke, isLoading = false }) => {
    return (
        <div className={styles.jokePage}>
            {isLoading ? (
                <TailSpin
                    height="80"
                    width="80"
                    color="#dae3f3"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperClass={styles.loader}
                    visible={true}
                />
            ) : (
                <>
                    <div className={styles.date}>{joke.updated_at}</div>
                    <div className={styles.content}>{joke.value}</div>
                </>
            )}
            <div className={styles.pageName}>Joker page</div>
        </div>
    )
}

export default JokePage
