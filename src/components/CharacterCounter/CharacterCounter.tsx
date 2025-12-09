import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter = (props: CharacterCounterProps) => {

    const [myCharacterCount, setCharacterCount] = useState(0)
    const [myWordCount, setWordCount] = useState(0)
    const [myReadingTime, setReadingTime] = useState(0)



    const handleTextChange = (text: string) => {
        setCharacterCount(text.length) // CONSIDER WHETHER OR NOT TO COUNT SPACES
        setWordCount(text.match(' ').length ?? 1) // CONSIDER 0 CHARACTER CASE, +1 IS NOT SUFFICIENT
        setReadingTime(myWordCount / 5) // Assume 5 words per second
    }


    return (
        <>
            <TextInput onTextChange={handleTextChange}></TextInput>
            <StatsDisplay TextStats={{ characterCount: myCharacterCount, wordCount: myWordCount, readingTime: myReadingTime }}></StatsDisplay>

        </>
    )
}