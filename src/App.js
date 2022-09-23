import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathor' },
];
const singerStyle = {
  color: 'purple',
  backgroundColor: 'White',
};

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name: {nayok}</li>
      ))}
      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}
      {singer.map((singer) => (
        <Person name={singer.name}></Person>
      ))}
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person> */}
      <h5>New Componenet yayyyy!!</h5>
      <p>rock mama React mama</p>
      <Friend movie="Shingam" phone="017777"></Friend>
      <Friend movie="Goalmal" phone="019999"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  );
}

export default App;
