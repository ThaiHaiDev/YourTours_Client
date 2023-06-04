import LoadingIcon from '../../assets/imgMaster/loading.gif';
import './LoadingPage.scss';

const LoadingPage = () => {
    return (
        <div className="loading__page">
            <img src={LoadingIcon} alt="" />
        </div>
    );
};

export default LoadingPage;
