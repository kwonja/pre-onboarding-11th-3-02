## 원티드 프론트엔드 3주차 과제

## 프로젝트 소개
특정 깃헙 레파지토리(‣)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 실행영상
![실행영상](https://github.com/kwonja/pre-onboarding-11th-3-02/assets/42410000/8b3dd1b8-e17a-455c-abec-6cb4a3621f4d)

## 프로젝트 기간
23.07.11 ~ 23.07.14

## 실행방법
 ```zsh
 cd pre-onboarding-11th-3-02
 $ npm install
 $ npm start
 ``` 

## 요구사항
- 필수 요구 사항
    - 이슈 목록 및 상세 화면 기능 구현
    - Context API를 활용한 API 연동
    - 데이터 요청 중 로딩 표시
    - 에러 화면 구현
    - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

- 선택 사항
    - CSS-in-JS 적용
## 개발환경
- 언어 : TypeScript
- 라이브러리
  - axios
  - styled-component
  - react-router-dom
## 프로젝트 구조
```
📦 src
├── 📂 apis
├── 📂 component
├── 📂 pages
│    ├── 📂 ad
│    ├── 📂 issue
│    ├── 📂 issuedetail
│    └── 📂 main
├── 📂 router
└── 📂 utils
```  

## Context API
### 이슈리스트
- 이슈목록에 대한 값과 목록을 수정하는 행위에 대한 핸들러 관리
- sort, state, page 을 통해 코멘트별,상태별 목록 관리, 페이징 처리
### 이슈 상세 페이지
- 이슈 상세페이지 값과 핸들러 관리
- 상세 페이지를 전역으로 관리하게 되는 경우 다른 상세 페이지로 이동할때 이전 값을 가지고 있는데 이를 방지하기위해 랜더링이 끝나면 resetIssue() 를 사용해 issue값을 지움
```tsx
const issue = useIssueDetail();
    const {getIssueDetail,resetIssue} =useDetailIssueChange();
    const {id} = useParams<string>();

    useEffect( () =>{
        getIssueDetail(id)

        return () => {
            resetIssue();
          };
      },[getIssueDetail,id])
```
## 데이터 요청중 로딩 구현
- issuelist, issue가 null 일때 로딩 JSX를 리턴
## 인피니티 스크롤 구현
-  IntersectionObserver 사용
-  스크롤을 내리면서 Loading 을 만날때 마다 handleObserver 함수를 실행시켜 리스트 목록을 추가함
```tsx
const loader = useRef<HTMLDivElement | null>(null);
...
<div ref={loader}>Loading...</div>


const handleObserver = useCallback((entries : IntersectionObserverEntry[]) => {
    console.log( "call observerapi")
    const target = entries[0];
    if (target.isIntersecting) {
      addPage()
    }
  }, []);


  useEffect(() => {
    const option = {
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
```
## IssueItem 메모라이제이션
- 페이징을 통해 이슈목록에 추가하면 이전 목록들도 다시 렌더링되는 경우가 발생
- React.memo 를 통해 이전 issueitem 기억
