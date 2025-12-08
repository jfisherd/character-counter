import type { TextInputProps } from "../../types";

export const TextInput = (props: TextInputProps) => {

    return (
        <>
            <input placeholder="props.placeholder" >{props.initialValue}</input>
        </>
    )
}
