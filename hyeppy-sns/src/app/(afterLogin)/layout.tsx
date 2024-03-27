import { ReactNode } from 'react';
import style from '@/app/(afterLogin)/layout.module.css'

export default function AfrerLoginLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <header className={style.leftSectionWrapper}></header>
            <div className={style.rightSectionWrapper}></div>
            {children}
            
        </div>
    );
}
