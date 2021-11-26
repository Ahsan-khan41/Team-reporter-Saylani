import { Layout, Menu } from 'antd';
import './Navbar.scss';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Navbar = () => {
    return (
        <div>
            <Layout>
                <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Teams</Menu.Item>
                        <Menu.Item key="2">Add Teams</Menu.Item>
                    </Menu>
                </Header>
            </Layout>          
        </div>
    )
}
export default Navbar;