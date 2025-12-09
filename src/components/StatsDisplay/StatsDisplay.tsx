import type { StatsDisplayProps, TextStats } from "../../types";


// export interface TextStats {
//   characterCount: number;
//   wordCount: number;
//   readingTime: number; // in minutes
// }
 
// export interface StatsDisplayProps {
//   stats: TextStats;
//   showReadingTime?: boolean;
// }


export const StatsDisplay = (stats: TextStats, showReadingTime?: boolean) => {

    const characterCount = stats.characterCount
    const wordCount = stats.wordCount
    const readingTime = stats.readingTime

    return (
        <>
            <div>Character count: {characterCount}</div>
            <div>Word count: {wordCount}</div>
            <div>Reading time (seconds): {readingTime}</div>
        </>
    )
}

