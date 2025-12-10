import type { StatsDisplayProps } from "../../types";

export const StatsDisplay = (props: StatsDisplayProps) => {

    const characterCount = props.stats.characterCount
    const wordCount = props.stats.wordCount
    const readingTime = props.stats.readingTime

    return (
        <>
            <div>Character count: {characterCount}</div>
            <div>Word count: {wordCount}</div>
            <div>Reading time (minutes): {readingTime}</div>
        </>
    )
}

