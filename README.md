# Proground 프론트엔드 코스 사전과제

## ✔️ 주요 기능 설명

- Redux Toolkit + Redux Saga + React-Infinite-Scroll-Component 를 사용하여 무한 스크롤 기능을 구현했습니다.
- Redux Persist를 사용해서 LocalStorage와 연동하여 유저 리스트에 대한 상태관리를 처리했습니다.
- React Router Dom + Framer Motion 애니메이션 라이브러리를 사용하여 라우터 이동시 앱처럼 보이도록 애니메이션을 추가했습니다.
- 리더보드 컴포넌트의 로직을 분리하여 Home과 Leader Board 페이지에서 재사용하였습니다.

## ✔️ 고민했던 점

### 1. 리더보드 구현 : 풀팝업 vs 페이지

최대한 앱 형식을 구현하기 위해 많은 고민을 했던 것 같습니다. 처음에는 리더 보드를 풀팝업 형식으로 애니메이션 효과를 주어 예시 영상과 같이 오른쪽에서 등장하도록 구현하려고 했습니다.

그러나 리더 보드 상에서도 무한 스크롤과 같은 성능에 영향을 끼치는 좀 무거운(?) 코드들이 있었기에 백 그라운드에서 Home과 함께 돌리고, profile 풀팝업, 앞으로 추가될 수 있는 다른 풀팝업 기능을 고려하면 성능상 문제가 많을 것 같다는 생각이 들었습니다.

문제를 어떻게 해결할 수 있을까 고민하다가 router 이동시 애니메이션 기능을 추가할 수 있는 framer-motion 라이브러리를 알게 되었고 라우터 형식으로 구현을 해도 앱처럼 보일 수 있겠다 생각하여 react-router-dom으로 페이지를 나누어 리더보드 페이지를 구현하게 되었습니다.

### 2. 랭킹 정렬

리더 보드 랭킹을 어떻게 처리할 지 많은 고민을 했습니다. 스크롤을 할 때 마다 무한 스크롤 방식으로 불러 온 데이터와 기존에 있는 데이터의 점수를 비교해서 다시 정렬해주는 것은 프론트단에서 처리하는데 매우 비효율적이라는 생각이 들었고, 불러오지 못한 뒤의 데이터에 더 높은 점수를 가진 유저가 있을 수 있어 모든 데이터를 한 번에 불러와 정렬하는 방법 외에 사실상 무한 스크롤 방식으로 구현하기 어렵겠다는 생각을 하게 되었습니다.

사실상 DB 유저 데이터의 price도 10000인 동일한 값이 매우 많아 정렬을 해도 같은 순위의 유저들이 많기때문에 공동 1위가 너무 많아 정렬을 하는 의미가 없다고 생각이 들었습니다. 그리하여 사실상 서버 단에서 배열 안의 랭킹이 이미 정렬되었다고 가정하고 offset을 0부터 주어 차례대로 불러오는 방식을 채택했습니다. (🚧 DB상 인덱스 0의 값은 결국 불러오지 못하여 serialNumber: 000002부터 1위가 배정되었습니다...)
