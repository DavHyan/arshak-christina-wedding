import { FC } from 'react';
import './Loader.scss';

interface ILoaderProps {
  size?: number;
  color?: string;
  message?: string;
}

const Loader: FC<ILoaderProps> = ({
  size = 50,
  color = '#3498db',
  message = '',
}) => {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <div
          className="spinner"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: `${color} transparent transparent transparent`,
          }}
        ></div>
        {message && <p className="loader-message">{message}</p>}
      </div>
    </div>
  );
};

export default Loader;
