import { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
    return (
        <div className={styles.container}>
            {/* beforeLogin page는 chidren으로 */}
            {/* @modal의 페이지는 modal로 */}
            비포 로그인 레이아웃
            {children}
            {modal}
        </div>
    );
}

// 주소가 localhost:3000일 때는 children-> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3000/i/flow/login 일 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
