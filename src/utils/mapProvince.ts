import Province from '../mockdata/ProvinceVN.json';

const mapProvince = (idProvince: any) => {
    if (idProvince !== undefined) {
        const provinceName = Province.filter((pro:any) => {return parseInt(pro.code) === parseInt(idProvince)})
        return provinceName[0].name
    }
    return ''
}

export default mapProvince