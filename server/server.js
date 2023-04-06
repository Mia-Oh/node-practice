const express = require('express')
const cors = require('cors') // cors 미들웨어를 불러옴

// 서버라는 이름의 서버를 만듬
const server = express();

// 모든 요청에 대해 CORS 허용
server.use(cors());

// 원시 자료형에도 parsing 해주도록 설정
server.use(express.json({strict:false}));

// server는 서버를 시작하며 8080 포트에서 연결을 청취함
const ip = 'localhost';
const port = '8080';

// client 디렉토리에 정적 파일 로드
server.use(express.static('client'));

server.post('/upper', (req, res) => {
  let result = req.body.toUpperCase()
  res.json(result);  
})

server.post('/lower', (req, res) => {
  let result = req.body.toLowerCase()
  res.json(result);  
})

server.listen(port, () => {
  console.log(`http server listen on ${ip}:${port}`)
})