import AtomicSpinner from 'atomic-spinner';
import './style.css';

type Props = {
  isLoading: boolean;
};

const IsLoading = (props: Props) => {
  const { isLoading } = props;
  return (
    <div>
      {isLoading && (
        <div className="loaging-spinner-container">
          <div className="loading-spinner">
            <AtomicSpinner></AtomicSpinner>
          </div>
        </div>
      )}
    </div>
  );
};

export default IsLoading;
