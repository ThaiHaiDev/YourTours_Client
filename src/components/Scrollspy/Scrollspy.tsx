import { Link, useNavigate } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

import './Scrollspy.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ScrollspyComponent = (props : any) => {
    let navigate = useNavigate();
    return (
        <div className="scroll-spy">
            {props.backUrl && <p onClick={() => navigate(-1)} style={{ margin: 0, fontSize: '16px', paddingTop: '-30px', paddingLeft: '150px', position: 'fixed', color: 'black', cursor: 'pointer'}}><ArrowBackIosIcon />Quay lại trang</p>}
            <div>
                <div>
                    {props.children?.map((child: any, index : number) => (
                        <section
                            id={child.to}
                            key={index}
                            style={{ marginLeft: '28%', paddingTop: '20px' }}
                        >
                            {child?.comp}
                        </section>
                    ))}

                    <Scrollspy
                        items={props.item}
                        currentClassName="is-current"
                        style={{
                            position: 'fixed',
                            height: '100vh',
                            marginTop: '130px',
                            top: '0',
                            backgroundColor: 'white',
                            listStyle: 'none',
                            color: 'var(--border-scroll)',
                            fontSize: '1.4rem',
                            fontWeight: '600',
                            paddingLeft: '150px'
                        }}
                    >
                        <Link to={props.infoLink.urlLink} className='link-sidebar'>{props.infoLink.name}</Link>
                        {props.children?.map((child: any, index: number) => (
                            <li key={index}>
                                <a href={child.id}>{child.info}</a>
                            </li>
                        ))}
                    </Scrollspy>
                </div>
            </div>

        </div>
    );
};

export default ScrollspyComponent;
