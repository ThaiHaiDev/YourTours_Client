import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ConvenientItem from '../../../components/ConvenientItem/ConvenientItem';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import ScrollspyComponent from '../../../components/Scrollspy/Scrollspy';
import amenityCategoryApi from '../../../services/amenityCategoryApi';

const infoLink = {
    name: 'Tiện nghi',
    urlLink: '/host/setting/convenient',
};

const backUrl = '/host/setting';

var item = [''];

var children: any = [];

var componentChildren : any = [];

const ConvenientOwnerSetting = () => {
    const [dataListCatagoryConvenient, setDataListCategoryConvenient] = useState<any>([]);

    const params = useParams();

    useEffect(() => {
        amenityCategoryApi.getAmenityCategoriesAllDetail(params.idHome).then((dataResponse: any) => {
            setDataListCategoryConvenient(dataResponse.data.content);
            
            for (var i = 0; i < dataResponse.data.content.length; i++) {
                let indexTemp = i + 1;
                console.log(dataResponse.data.content)
                const temp = {
                    id: `#section${indexTemp}`,
                    to: `section${indexTemp}`,
                    info: dataResponse.data.content[i]?.name,
                    comp: <ConvenientItem dataConveni={dataResponse.data.content[i]?.childAmenities} name={dataResponse.data.content[i]?.name} />,
                };

                if (!children.some((person: any) => person.id === temp.id)) {
                    children.push(temp);
                    item.push(`section${indexTemp}`);
                }
            }
        });
    }, []);

    

    return (
        <div className="owner-convenient__setting">
            <NavbarOwner />
            <ScrollspyComponent children={children} item={item} infoLink={infoLink} backUrl={backUrl} />
        </div>
    );
};

export default ConvenientOwnerSetting;
