## slug

다이나믹 라우팅 [] 로 작성하면

## template.tsx, layout.tsx 차이

새롭게 mount 되게 하고 싶을 때 -> template.tsx
리렌더링이 되지 않게 하고 싶을 때 -> layout.tsx

## Parallel Routes

Parallel Routes는 동일한 레이아웃 내에서 하나 이상의 페이지를 동시에 또는 조건부로 렌더링 할 수 있는 방법.

슬롯을 사용해 병렬로 페이지를 렌더링 하는데, 슬롯 규칙은 폴더 앞에 '@'를 사용한다.

![Alt text](image-1.png)
슬롯으로 사용될 modal과 layout.tsx는 같은 폴더 안에 있어야 에러가 나지 않는다.

## 클라이언트 컴포넌트로 전환하기

Next의 모든 컴포넌트는 서버 컴포넌트이다.
그래서 useState, useEffect 같은 Hook을 사용하지 못하는데 클라이언트 컴포넌트로 전환하면 사용할 수 있다.
방법은 클라이언트 컴포넌트로 전환하고 싶은 컴포넌트 상단에 `use client`라고 작성하면 된다.
