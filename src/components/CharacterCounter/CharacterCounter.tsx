import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import type { TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter = (props: CharacterCounterProps) => {

    const [myCharacterCount, setCharacterCount] = useState(0)
    const [myWordCount, setWordCount] = useState(0)
    const [myReadingTime, setReadingTime] = useState(0)
    const [myText, setMyText] = useState('')

    const [textStats, setTextStats] = useState({
        characterCount: myCharacterCount,
        wordCount: myWordCount,
        readingTime: myReadingTime
    })

    // CHARACTER COUNT DOES NOT UPDATE UNTIL AFTER A SECOND WORD IS BEING TYPED
    const handleTextChange = (text: string) => {
        setMyText(text)
        setCharacterCount(text.length) // CONSIDER WHETHER OR NOT TO COUNT SPACES
        // .match() is not sufficient to count words... find another way
        // Use a .map on text with .match(' ')? Rough on performance?
        setWordCount(text.split(' ').length) // CONSIDER 0 CHARACTER CASE, +1 IS NOT SUFFICIENT
        setReadingTime(myWordCount / 5 / 60) // Assume 5 words per second, 300 words per minute
        setTextStats({
            characterCount: myCharacterCount,
            wordCount: myWordCount,
            readingTime: myReadingTime
        })
        // ACCOUNT FOR THE OFF-BY-ONE DIFFERENCE (myCharacterCount and textStats.characterCount) NOTICED IN THE REACT DEV TOOLS (f12)
    }

    return (
        <>
            <TextInput onTextChange={handleTextChange}></TextInput>
            <div>Your typed text: {myText}</div>
            <StatsDisplay stats={textStats}></StatsDisplay>


        </>
    )
}