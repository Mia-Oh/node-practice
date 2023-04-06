class App {
  init(){
    document
    .querySelector('#to-upper-case')
    .addEventListener('click', this.toUpperCase.bind(this));
    document
    .querySelector('#to-lower-case')
    .addEventListener('click', this.toLowerCase.bind(this));
  }
  post(path, body){ //? 2 : 1번에서 전달 받음
    fetch(`http://localhost:8080/${path}`,{
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      this.render(res) //? 3
    });
  }
  toLowerCase() { //? 1
    const text = document.querySelector('.input-text').value; // .input-text의 값을 text에 할당
    this.post('lower', text); // post로 lower 은 path로 text와 함께 전달 됨
  }
  toUpperCase() {
    const text = document.querySelector('.input-text').value;
    this.post('upper', text);
  }
  render(response) {
    const resultWrapper = document.querySelector('#response-wrapper');
    document.querySelector('.input-text').value = ''; // textarea 비워주기
    resultWrapper.innerHTML = response;
  }
}

const app = new App();
app.init();