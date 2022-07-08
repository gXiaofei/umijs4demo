import Guide from '@/components/Guide';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
    window.electron.ipcRenderer.invoke('getStore', ['darkMode']).then((res) => {
        console.log(res);
    });
    window.electron.ipcRenderer.on('storeChange', (args) => {
        console.log(args);
    });
    return (
        <PageContainer ghost>
            <div className={styles.container}>
                <Guide />
            </div>
        </PageContainer>
    );
};

export default HomePage;
