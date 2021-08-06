interface ButtonProps {
    label: string;
}

export const Button = ({ label = "Shareef" }: ButtonProps) => {
    return <button>{label}</button>;
};
