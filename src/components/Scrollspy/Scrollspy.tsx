import Scrollspy from 'react-scrollspy';

import './Scrollspy.scss';

const ScrollspyComponent = () => {
    return (
        <div className="scroll-spy">
            <div>
                <div>
                    <section id="section1" style={{ height: '800px', marginLeft: '30%', background: 'red' }}>
                        section 1
                    </section>
                    <section id="section2" style={{ height: '800px', marginLeft: '30%', background: 'green' }}>
                        section 2
                    </section>
                    <section id="section3" style={{ height: '800px', marginLeft: '30%', background: 'yellow' }}>
                        section 3
                    </section>

                    <Scrollspy
                        items={['section1', 'section2', 'section3']}
                        currentClassName="is-current"
                        style={{
                            position: 'fixed',
                            height: '100vh',
                            width: '30%',
                            marginTop: '66px',
                            top: '0',
                            backgroundColor: 'white',
                            listStyle: 'none',
                            color: 'var(--border-scroll)',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            paddingTop: '20px'
                        }}
                    >
                        <li>
                            <a href="#section1">Thông tin cơ bản</a>
                        </li>
                        <li >
                            <a href="#section2">Tiện nghi</a>
                        </li>
                        <li>
                            <a href="#section3">Vị trí</a>
                        </li>
                    </Scrollspy>
                </div>
            </div>
        </div>
    );
};

export default ScrollspyComponent;
