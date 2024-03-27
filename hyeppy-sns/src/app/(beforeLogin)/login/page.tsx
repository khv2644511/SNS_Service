'use client';

import { useRouter } from 'next/navigation';
import Main from '../_component/Main';

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');

    return <Main />;
}

// router.push
// localhost:3001 -> localhost:3001/login (history) -> localhost:3001/i/flow/login
// 뒤로가기 클릭시 history를 기억했다가 돌아감

// router.replace
// localhost:3001 -> localhost:3001/login (history) -> localhost:3001/i/flow/login
// 뒤로가기 클릭시 history를 기억하지 않고 localhost:3001로 이동됨
