## 구현 기능

- Express Web Server 실행
- MySQL 데이터베이스 Configuration 추가
- 'Customer' 샘플 모델 생성하여 컨트롤러 작성
- CRUD 작업을 처리하기 위한 routes 정의

  | Methods |      Urls      |       Actions        |
  | :-----: | :------------: | :------------------: |
  |   GET   |   /customers   | 모든 Customers 조회  |
  |   GET   | /customers/:id | id 로 Customers 조회 |
  |  POST   |   /customers   |    Customers 생성    |
  |   PUT   | /customers/:id | id로 Customers 수정  |
  | DELETE  | /customers/:id | id로 Customers 삭제  |
  | DELETE  |   /customers   |  모든 Customer 삭제  |
