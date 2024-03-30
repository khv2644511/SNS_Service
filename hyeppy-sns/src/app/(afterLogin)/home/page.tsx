import style from './home.module.css';

import Tab from './_component/Tab';
import TabProvider from './_component/TabProvier';

export default function Home() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                {/* <PostFrom /> */}
                {/* <Post /> */}
            </TabProvider>
        </main>
    );
}
