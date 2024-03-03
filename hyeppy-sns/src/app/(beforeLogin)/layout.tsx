import { ReactNode } from 'react';
import styles from '@/app/page.module.css';

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
