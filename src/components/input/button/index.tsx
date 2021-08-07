import "./button.module.css";

interface ButtonProps {
    label: string;
}

export const Button = ({ label = "Shareef" }: ButtonProps) => {
    return <button className="button">{label}</button>;
};
