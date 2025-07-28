import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) =>{

    return (
        <>
            <div>
                <a href={props.link? props.link : "#"}>
                    {props.text}
                </a>
            </div>
        </>
    )
}