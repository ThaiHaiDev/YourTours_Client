import { useEffect, useState } from 'react';
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

var childrenTest:any = []

var dataTest = new Set()

const ConvenientOwnerSetting = () => {
    const [dataListCatagoryConvenient, setDataListCategoryConvenient] = useState<any>([]);
    const [dataListChildrenConvenient, setDataListChildrenConvenient] = useState<any>([]);

    useEffect(() => {
        (async () => {
            try {
                const dataResponse = await amenityCategoryApi.getAmenityCategoriesAll();
                setDataListCategoryConvenient(dataResponse.data.content);

                for (var i = 0; i < dataResponse.data.content.length; i++) {
                    const indexTemp = i + 1;
                    const temp = {
                        id: `#section${indexTemp}`,
                        to: `section${indexTemp}`,
                        info: dataResponse.data.content[i]?.name,
                        comp: <ConvenientItem />,
                    }
               
                    if (!childrenTest.some((person: any) => person.id === temp.id)) {
                        childrenTest.push(temp);
                        item.push(`section${indexTemp}`);
                    } 
                }             
                
            } catch (error) {
                console.log('Failed to fetch category list!', error);
            }
        })();
    }, []);

    // console.log(dataListCatagoryConvenient);

    // console.log(childrenTest)

    // console.log(dataListCatagoryConvenient)
    // console.log(item);
    // console.log(children)

    return (
        <div className="owner-convenient__setting">
            <NavbarOwner />
            <ScrollspyComponent children={childrenTest} item={item} infoLink={infoLink} backUrl={backUrl} />
        </div>
    );
};

export default ConvenientOwnerSetting;
