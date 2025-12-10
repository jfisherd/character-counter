import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import type { TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter = (props: CharacterCounterProps) => {

    const [myCharacterCount, setCharacterCount] = useState(0)
    const [myWordCount, setWordCount] = useState(0)
    const [myReadingTime, setReadingTime] = useState(0)

    const[myText, setMyText] = useState('')
    
    const handleTextChange = (text: string) => {
        setMyText(text)
        setCharacterCount(text.length) // CONSIDER WHETHER OR NOT TO COUNT SPACES
        // .match() is not sufficient to count words... find another way
        setWordCount(text.match(' ').length? text.match(' ').length : 0) // CONSIDER 0 CHARACTER CASE, +1 IS NOT SUFFICIENT
        setReadingTime(myWordCount / 5) // Assume 5 words per second... CONVERT THIS TO MINUTES
    }


    // const myStats = new TextStats(myCharacterCount,myWordCount,myReadingTime)

    return (
        <>
            <TextInput onTextChange={handleTextChange}></TextInput>
            <div>Your typed text: {myText}</div>
            {/* <StatsDisplay TextStats={}></StatsDisplay> */}
            <StatsDisplay />

        </>
    )
}