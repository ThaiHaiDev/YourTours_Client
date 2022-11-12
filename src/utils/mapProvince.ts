import Province from '../mockdata/ProvinceVN.json';

const mapProvince = (idProvince: string) => {
    const provinceName = Province.filter((pro:any) => {return parseInt(pro.code) === parseInt(idProvince)})
    return provinceName[0].name
}

export default mapProvince