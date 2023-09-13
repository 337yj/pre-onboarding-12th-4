## 원티드 프리온보딩 프론트엔드 인턴십 4주차 과제

🎯 주어진 데이터를 기반으로 시계열 차트 만들기

<br/>

## 배포 링크

[배포 링크](https://graceful-blancmange-d51e96.netlify.app)

<br/>

## 프로젝트 실행 방법

```
git clone https://github.com/337yj/pre-onboarding-12th-4.git

npm install
npm start
```

<br/>

## 폴더 구조

```
  📂  public
   │  └─ mock_data.json
  📂  src
   ├─ api
   │  └─ chartData.js
   ├─ components
   │  ├─ Chart.js
   │  └─ ToolTip.js
   ├─ hooks
   │  └─ useFetchData.js
   ├─ router
   │  └─ Router.js
   ├─ style
   │  └─ GlobalStyle.js
   ├─ App.js
   └─ index.js
```

<br/>

## 기술 스택

`React` `Javascript` `ApexCharts` `axios` `react-router-dom` `styled-components`

<br/>

## 기능 구현

### ✅ 시계열 차트 구현:

> 💡**요구사항**
>
> - 주어진 JSON 데이터의 key값(시간)을 기반으로 시계열 차트를 만들어주세요
> - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
> - Area 그래프의 기준값은 value_area 값을 이용해주세요
> - Bar 그래프의 기준값은 value_bar 값을 이용해주세요
> - 차트의 Y축에 대략적인 수치를 표현해주세요

- ApexCharts 라이브러리 사용해 주어진 데이터의 key값(시간)을 기반으로 시계열 차트를 구현하였습니다.
- `chartData` 배열을 생성하여 각 데이터 항목을 시간(x), ID(id), Area 그래프 값(y_area), Bar 그래프 값(y_bar), 색상 정보(fillColor)로 구성하였습니다.
- `chartSeries` 객체를 만들어 Bar와 Area 그래프를 설정하고, 각 그래프에 대한 데이터를 설정하였습니다.

<br/>

### ✅ 호버 기능 구현:

> 💡**요구사항**
>
> - 특정 데이터 구역에 마우스 호버시 id, value_area, value_bar 데이터를 툴팁 형태로 제공해주세요

- ApexCharts에서 제공하는 `tooltip` 옵션을 커스텀하여 구현하였습니다.
- 툴팁은 호버된 데이터의 `ID`, `value_area`, `value_bar`, `시간` 정보를 표시합니다.

<br/>

### ✅ 필터링 기능 구현:

> 💡**요구사항**
>
> - 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
> - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
> - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
> - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

- `useSearchParams`를 이용하여 현재 URL의 query string을 파싱하고, 선택한 ID값을 추출하도록 하였습니다.
- 이 후 버튼을 클릭하거나 차트에서 데이터를 클릭할 때마다 `setSearchParams`를 사용하여 URL의 id 매개변수를 업데이트되고, 선택된 ID가 URL에 반영되어 필터링이 됩니다.
- `RESET 버튼`을 클릭하면 모든 필터를 제거하고 초기 상태로 돌립니다.
