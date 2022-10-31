import React from 'react';
import axios from 'axios';

const Form = () => {
    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState<any>(null);

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);
        try {
            const response = await axios({
                method: 'post',
                url: 'https://your-tours.herokuapp.com/api/v1/media/public/upload',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleFileSelect = (event:any) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileSelect} />
            <input type="submit" value="Upload File" />
        </form>
    );
};

export default Form;
