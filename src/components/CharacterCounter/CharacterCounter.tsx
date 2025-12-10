import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter = (props: CharacterCounterProps) => {

    const [characterCount, setCharacterCount] = useState(0)
    const [wordCount, setWordCount] = useState(0)
    const [readingTime, setReadingTime] = useState(0)
    const [myText, setMyText] = useState('')
    const [textStats, setTextStats] = useState({
        characterCount: characterCount,
        wordCount: wordCount,
        readingTime: readingTime
    })

    // CHARACTER COUNT DOES NOT UPDATE UNTIL AFTER A SECOND WORD IS BEING TYPED
    // PASTING INTO THE INPUT FIELD DOES NOT COUNT AS A 'CHANGE'?
    // BACKSPACING OR DELETING TEXT CAUSES TEMPORARY ERRONEOUS STATS TO DISPLAY
    const handleTextChange = (text: string) => {
        setMyText(text)
        setCharacterCount(text.length)
        setWordCount(text.split(' ').length? text.split(' ').length : 1) // CONSIDER 0 CHARACTER CASE, +1 IS NOT SUFFICIENT
        setReadingTime(Math.round(wordCount / 5 / 60 * 100)) // Assume 5 words per second, 300 words per minute
        setTextStats({
            characterCount: characterCount,
            wordCount: wordCount,
            readingTime: readingTime
        })
    }

    return (
        <>
            <TextInput onTextChange={handleTextChange}></TextInput>
            <StatsDisplay stats={textStats}></StatsDisplay>
            <h4>Your typed text: {myText}</h4>
        </>
    )
}