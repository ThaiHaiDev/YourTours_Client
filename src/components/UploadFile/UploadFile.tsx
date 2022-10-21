import React, { useRef, useState } from 'react';

import './UploadFile.scss';

import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/upload/cloud-upload-regular-240.png';

interface DropFileType {
    onFileChange: (value: File[]) => void;
}

const UploadFile = (props: DropFileType) => {
    const wrapperRef = useRef<HTMLInputElement | null>(null);

    const [fileList, setFileList] = useState<File[]>([]);

    const onDragEnter = () => wrapperRef.current?.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current?.classList.remove('dragover');

    const onDrop = () => wrapperRef.current?.classList.remove('dragover');

    const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFile = event.target.files[0];
            if (newFile) {
                const updatedList = [...fileList, newFile];
                setFileList(updatedList);
                props.onFileChange(updatedList);
            }
        }
    };

    const fileRemove = (file: File) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    };

    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Chọn từ thiết bị hoặc kéo ảnh của bạn vào đây</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} />
            </div>
            {fileList.length > 0 ? (
                <div className="drop-file-preview">
                    <p className="drop-file-preview__title">Ready to upload</p>
                    {fileList.map((item, index) => (
                        <div key={index} className="drop-file-preview__item">
                            <img
                                src={
                                    ImageConfig['jpeg'] ||
                                    ImageConfig['css'] ||
                                    ImageConfig['png'] ||
                                    ImageConfig['default']
                                }
                                alt=""
                            />
                            <div className="drop-file-preview__item__info">
                                <p>{item.name}</p>
                                <p>{item.size}B</p>
                            </div>
                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>
                                x
                            </span>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
};

export default UploadFile;
