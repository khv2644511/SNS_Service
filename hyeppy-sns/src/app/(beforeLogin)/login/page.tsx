'use client';

import { useRouter } from 'next/navigation';
import Logo from '../../../../public/hyepLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../page.module.css';

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image src={Logo} alt="hyeppy logo" />
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일</h1>
                <h2>지금 가입하세요.</h2>
                <Link href="/i/flow/signup" className={styles.signup}>
                    계정 만들기
                </Link>
                <h3>이미 트위터에 가입하셨나요?</h3>
                <Link href="/login" className={styles.login}>
                    로그인
                </Link>
            </div>
        </div>
    );
}

// router.push
// localhost:3001 -> localhost:3001/login (history) -> localhost:3001/i/flow/login
// 뒤로가기 클릭시 history를 기억했다가 돌아감

// router.replace
// localhost:3001 -> localhost:3001/login (history) -> localhost:3001/i/flow/login
// 뒤로가기 클릭시 history를 기억하지 않고 localhost:3001로 이동됨
