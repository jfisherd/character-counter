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
        setCharacterCount(text.length? text.length : 1) // CONSIDER WHETHER OR NOT TO COUNT SPACES
        // .match() is not sufficient to count words... find another way
        // Use a .map on text with .match(' ')? Rough on performance?
        setWordCount(text.split(' ').length) // CONSIDER 0 CHARACTER CASE, +1 IS NOT SUFFICIENT
        setReadingTime(Math.round(myWordCount / 5 / 60 * 100)/100) // Assume 5 words per second, 300 words per minute
        setTextStats({
            characterCount: myCharacterCount,
            wordCount: myWordCount,
            readingTime: myReadingTime
        })
        
        // PASTING INTO THE INPUT FIELD DOES NOT COUNT AS A 'CHANGE'
    }

    return (
        <>
            <TextInput onTextChange={handleTextChange}></TextInput>
            <StatsDisplay stats={textStats}></StatsDisplay>
            <h4>Your typed text: {myText}</h4>
            


        </>
    )
}