import UploadFile from '../../../components/UploadFile/UploadFile';

import './StepperFour.scss';

const StepperFour = (props : any) => {
    const onFileChange = (files: File[]) => {
        if (props.setDataStep4) {
            props.setDataStep4(files)
        }
    };

    return (
        <div className="step-four">
            <div className="row">
                <div className="col l-6 m-6">
                    <h1>Tiếp theo, hãy thêm một số ảnh chụp chỗ ở của bạn</h1>
                </div>
                <div className="col l-6 m-6">
                    <div className="upload-file">
                        <UploadFile onFileChange={(files) => onFileChange(files)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepperFour;
