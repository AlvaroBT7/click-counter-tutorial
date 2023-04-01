import '../styles/Display.css';

const Display = ({ content='no-content' }) => {
  return (
    <div className='Display-container'>
      <h1 className='Display'>{content}</h1>
    </div>
  );
};

export default Display;
