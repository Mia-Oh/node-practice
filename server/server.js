const express = require('express')
const cors = require('cors') // cors 미들웨어를 불러옴

// 서버라는 이름의 서버를 만듬
const server = express();

// 모든 요청에 대해 CORS 허용
server.use(cors());

// 원시 자료형에도 parsing 해주도록 설정
server.use(express.json({strict:false}));

const ip = 'localhost';
const port = '8080';

// client 디렉토리에 정적 파일 로드
server.use(express.static('clinet'));

server.post('/upper', (req, res) => {
  console.log(req.body);
})

server.post('/lower', (req, res) => {
  console.log(req.body);
})

server.listen(port, () => {
  console.log(`http server listen on ${ip}:${port}`)
})