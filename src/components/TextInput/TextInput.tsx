import type { TextInputProps } from "../../types";

// export interface TextInputProps {
//   onTextChange: (text: string) => void;
//   placeholder?: string;
//   initialValue?: string;
// }

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
