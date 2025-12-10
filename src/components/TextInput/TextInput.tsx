import type { TextInputProps } from "../../types";

export const TextInput = (props: TextInputProps) => {

    return (
        <>
            <input
                placeholder="Type something~"
                onChange={ (event) => props.onTextChange(event.target.value)}
            >{props.initialValue}</input>
        </>
    )
}
