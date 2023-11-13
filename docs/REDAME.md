# javascript-christmas-6-jonique98 #

### 작성자
프론트엔드 6기 참가자 조수민

# 📂구조
```
+ src
  + constants
    └ constants.js --- constants를 선언한 파일
  + controller
    └ Planner.js -- model과 view를 컨트롤 하는 controller
  + model
    └ Benefits.js ------------- 혜택을 관리하는 객체
		└ Date.js ----------------- 날짜를 관리하는 객체
		└ Order.js ---------------- 주문받아서 처리하는 객체
		└ OrderMenu	------------- 주문 객체에서 생성되서 주문한 메뉴를 담고있는 객체
		└ OrderPrice.js ------- 주문 객체에서 생성되서 주문한 메뉴의 가격을 담고있는 객체
  + view
    └ InputView.js ---- 입력 객체
    └ OutputView.js --- 출력 객체
└ App.js --- controller로부터 데이터를 받고 입출력을 관리하는 객체
└ index.js -- App.run()

```

## 코드 컨셉

### 1. 객체의 역할을 명확히 하려고 했다.(getter를 사용하지 않았다)
	- getter를 사용하면 객체의 역할이 모호해진다고 생각했다.	
	- 객체의 역할을 명확히 하기 위해 모든 동작은 객체로부터 메세지를 받아서 이루어진다.

### 2. 입출력을 담당하는 UI 파트를 철저히 분리하려고 했다.
	- 모델과 컨트롤러에서는 View객체를 전혀 사용하지 않았다.
	- 마찬가지로 View객체는 model과 controller의 존재를 모른다.
	- UI모듈을 import한 곳은 App.js뿐이다. 사실상 입출력 모델이다.

### 3. 패턴을 크게 신경쓰지 않았다.
	- 폴더와 파일명은 편의상 mvc에서 따왔지만, 패턴 규칙에 얽매이진 않았다.
	- 더 객체지향적으로 설계하는 것에 더 집중했다.
---

### eslint 설정
```
{
	"parserOptions": {
    "ecmaVersion": 2022
  },
	"extends": ["airbnb", "plugin:prettier/recommended"],
	"rules": {
		"class-methods-use-this": "off",
		"prettier/prettier": "error",
		"lines-between-class-members": "off",
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"no-useless-constructor": "off"
	}
}
```

---

# 🗂기능 구현 목록

## Benefit.js

### 🔬variable

	- #totalBenefits - 총 혜택받은 금액을 저장
	- #discountBenefits - 증정품을 제외하고 실제 할인된 금액을 저장

### 🛠주요 메소드

__weekendDiscount(mainOrder)__

	-메인 메뉴의 갯수를 인자로 받아 주말 할인을 적용한 금액을 반환

__weekdaysDiscount(desertOrder)__

	-디저트 메뉴의 갯수를 인자로 받아 주중 할인을 적용한 금액을 반환


__christmasDiscount(dateBeforeChristmas)__

	-크리스마스까지 남은 날짜를 인자로 받아 크리스마스 할인을 적용한 금액을 반환

__specialDiscount(specialDay)

	-특별한 날짜에 대한 boolean값을 인자로 받아 특별 할인 금액을 반환


___

## Date.js

### 🔬variable

	- #date - 날짜를 저장하는 변수

### 🛠주요 메소드

__dateIsWeekend()__

	- 날짜가 주말인지 boolean값 반환

__dateIsSpecialDay()__

	- 날짜가 특별한(스타가 있는) 날인지 boolean값 반환

__dateIsBeforeChristmas()__

	- 크리스마스 전인지 boolean값 반환

__christmasLeftDate()__

	- 크리스마스까지 남은 날짜 반환

---

## Order.js

### 🔬variable

	- #orderMenus - OrderMenu 객체 변수
	- #orderPrice - OrderPrice 객체 변수

### 🛠주요 메소드

__constructor(orderString)__

	- Util의 parser를 통해 #orderMenus, #orderPrice 초기화

__mainMenuNumber()__

	- OrderMenu의 동명 메소드 호출해서 반환

__desertMenuNumber()__

	- OrderMenu의 동명 메소드 호출해서 반환

__canGetBenefit()__

	- OrderPrice의 동명 메소드 호출해서 반환

__canGetGiveaway__

	- OrderPrice의 동명 메소드 호출해서 반환

---

## OrderMenu.js

### 🔬variable

	- #menu - 오브젝트로 파싱된 메뉴를 가지고있는 변수


### 🛠주요 메소드

__constructor(menu)__

	- 파싱된 메뉴에 대한 유효성 검사 후 #menu 초기화

__mainMenuNumber()__

	- 메인 메뉴의 갯수 반환

__desertMenuNumber()__

	- 디저트 메뉴의 갯수 반환

---

## OrderPrice.js

### 🔬variable

	- #price - 전체 주문된 가격을 저장한 변수

### 🛠주요 메소드

__constructor(menu)__

	- 파싱된 메뉴를 인자로 받아서 #price 초기화

__calculatePrice()__

	- menu를 순회를 돌면서 #price를 계산하여 반환

__canGetBenefit()__

	- 혜택을 받을 수 있는지 boolean값 반환

__canGetGiveaway()__

	- 증정품을 받을 수 있는지 boolean값 반환

---

## Planner.js

### 🔬variable

	- #benefits - Benefits class 객체
	- #date - Date class 객체
	- #order - Order class 객체


### 🛠주요 메소드

__initDate(date)__

	- Date class 객체 초기화

__takeOrder(orderString)__

	- Order class 객체 초기화하는걸 주문을 받는다고 추상화

	__benefits()__

	- 각 클래스의 메소드를 적절히 활용해서 모든 혜택을 계산
	- 각 혜택값을 문자열 배열로 반환

	__benefit관련 메소드__

	- 각 메소드는 benefits의 메소드를 활용함
	- 혜택 조건에 따라 date와 order의 boolean값 및 메세지 반환 메소드를 호출함

## InputView.js ##

  - Console.readLineAsync()를 활용해 입력을 담당하는 클래스
	- 총 입력부는 메뉴와 날짜 2개로 나뉘어져 있음

___

## OutputView.js ##

  - Console.print를 활용해 출력을 담당하는 클래스
	- 상황마다 메소드를 분리 해놓았음