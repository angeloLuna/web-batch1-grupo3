import './App.css'
import Layout from './componentes/Layout';

const App = () => {


  // 6, 20, 30, 8

  const fizzbuzz = (n) => {
    // if(n%3 === 0 && n%5 === 0) {
    //   console.log('fizzbuzz', n)
    // } else if(n%3 === 0) {
    //   console.log('fizz',n)
    // } else if(n%5 === 0) {
    //   console.log('buzz',n)
    // } else {
    //   console.log(n)
    // }
  }

  fizzbuzz(6)
  fizzbuzz(20)
  fizzbuzz(30)
  fizzbuzz(8)
  return (
    <div className="app">
      <Layout />
    </div>
  );
}

export default App;
