import type { StatsDisplayProps, TextStats } from "../../types";

export const StatsDisplay = (stats: TextStats, showReadingTime?: boolean) => {

    const characterCount = stats.characterCount
    const wordCount = stats.wordCount
    const readingTime = stats.readingTime

    return (
        <>
            <div>Character count: {characterCount}</div>
            <div>Word count: {wordCount}</div>
            <div>Reading time (minutes): {readingTime}</div>
        </>
    )
}

