# 뚜러뚜러하수구 무료 랜딩페이지

시공 사례형 정적 홈페이지입니다. HTML/CSS/JavaScript와 Python 페이지 생성 스크립트로 구성되어 GitHub Pages에 게시할 수 있습니다.

## 전화번호 설정
`script.js` 맨 위 `PHONE_NUMBER`에 실제 번호를 입력하세요. 예: `const PHONE_NUMBER = "01012345678";` 번호가 비어 있으면 전화 버튼은 전화 연결 대신 설정 안내를 표시합니다.

## 지역 페이지 생성
Python 3이 설치된 환경에서 프로젝트 폴더로 이동해 `python3 generate.py`를 실행하세요. Windows에서 `python3`가 작동하지 않으면 `python generate.py`를 사용합니다. 지역명과 기본 설명은 `data/areas.json`에서 수정한 뒤 다시 실행하면 됩니다.

## 시공 사례 등록
대표 페이지의 사례 카드는 안내용 자리표시자입니다. 실제 시공 사진, 지역/건물 유형, 확인된 증상과 원인, 사용한 작업 방법, 작업 후 결과로 교체하세요. 고객 얼굴, 차량번호, 전체 주소 등 개인정보는 가리세요. 실제 사례가 없는 지역은 시공 사례를 만들어내지 마세요. 유사 문구만 바꾼 대량 페이지는 검색 품질에 불리할 수 있습니다.

## GitHub Pages 게시
1. GitHub에서 새 Public repository를 생성합니다(예: `tureotureo-landing`).
2. 이 폴더 안의 파일과 `.github/workflows/pages.yml`을 저장소 최상위에 업로드합니다.
3. 저장소 Settings → Pages에서 Build and deployment가 GitHub Actions를 사용하도록 확인합니다.
4. Actions 탭에서 배포 작업이 성공했는지 확인합니다.
5. Pages 설정에 표시된 주소로 접속합니다. 일반적으로 `https://사용자명.github.io/저장소명/` 형식입니다.

## 게시 전 확인
- 실제 전화번호와 사업자 정보 입력
- 실제 시공 사진과 사실에 맞는 작업 내용 반영
- 모바일에서 전화 버튼과 레이아웃 점검
- 출동 가능 지역 확인 및 지역 목록 수정
- 네이버 서치어드바이저와 Google Search Console에 사이트 등록 후 수집 상태 확인

GitHub Pages의 기본 주소를 사용하면 도메인 구매비 없이 게시할 수 있습니다. 자체 도메인을 사용하려면 도메인 비용이 별도로 발생할 수 있습니다.
