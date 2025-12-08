import type { StatsDisplayProps } from "../../types";


// export interface TextStats {
//   characterCount: number;
//   wordCount: number;
//   readingTime: number; // in minutes
// }
 
// export interface StatsDisplayProps {
//   stats: TextStats;
//   showReadingTime?: boolean;
// }


export const StatsDisplay = (props: StatsDisplayProps) => {

    return (
        <>
            <div>Character count: {props.stats.characterCount}</div>
            <div>Word count: {props.stats.wordCount}</div>
            <div>Reading time: {props.stats.readingTime}</div>
        </>
    )
}

