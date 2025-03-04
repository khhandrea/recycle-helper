import { Answer, Result } from "../constants/types";
import React, { useCallback } from "react";

import Image from 'next/image'
import styles from "../styles/ResultCard.module.sass";

interface ResultCardProps {
    result: Result
    onUp: () => void
    onInit: () => void
}

const ResultCard: React.FC<ResultCardProps> = (props) => {

    const { onUp, onInit, result } = props

    return (
        <>
            <div className={styles.container__result}>
                <span className={styles.arrow_button} onClick={onUp} />
                <div className={styles.container_result}>
                    <div className={styles.image_result}>
                        {/* 238px 모바일 부분 */}
                        <Image
                            src={require(`../public/images/result/${result.image}.png`)}
                            alt={result.name}
                            layout="fill"
                            objectFit='contain'
                        />
                    </div>
                    <div className={styles.context_result}>
                        <h1>{result.name}</h1>
                        <div>{result.content}</div>
                    </div>
                </div>
                <span className={styles.fonts__button} onClick={onInit} >다시하기</span>
            </div>
        </>
    )
}

export default ResultCard