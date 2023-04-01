import '../styles/Button.css';

const Button = ({ title = "default-button", action, type }) => {
  const buttonClass = type ? type : '';
  return <button onClick={action} className={`Button ${buttonClass}`}>{title}</button>;
};

export default Button;
