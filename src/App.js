//import logo from './logo.svg';
import './App.css';
import CarImg from './images/BlackCar.jpeg';
import CarImg2 from './images/BlackCar2.jpeg';
import { NEW_CONCEPT } from './data';
 

const MultipleNames=['Mark', 'James', 'John']; //declared variable that carries the new names

function RandomNames(Max){                             //component function that does the random names 
  return Math.floor(Math.random()*(Max+1));
  }
 

function LawrenceReact(){
  const Max = MultipleNames.length-1;               // Calculate the maximum index based on the length of MultipleNames
  const Newnames=MultipleNames[RandomNames(Max)];       // Declared variable that carries the new names
  return(
    <h1>
    {Newnames} Lawrence Motors: Investing in fast cars"
  </h1>
  );
 }

function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
                                                        //ALTERNATIVE WAY OF WRITTING THIS COMPONENT(although its longer)
function NewConcept({Picture, header, body}){         //function NewConcept(props){}    <img src={props.Picture} alt={props.header} />
  return(                                                                          // <h1>{props.header}<h1/>   <p>{body}</p>
    <div>
      <img src={Picture} alt={header}/>           
      <h1>{header}</h1>
      <p>{body}</p>
      </div>
  );
  }

function App() {
  return (
    <div className="App">
        <LawrenceReact/>
          <main>
            <h2>Cars up for sales</h2>
            <ul id="core-concept">
              <CoreConcept
              title="Black baby"
              description="Good black cars are my toys"
              image={CarImg}
              />
              <CoreConcept
              title="Sweet Black Boy"
              description="Bouncing baby boy"
              image={CarImg2}/>
              <CoreConcept
              title="Black baby"
              description="Good black cars are my toys"
              image={CarImg}/>

              <NewConcept
              header={NEW_CONCEPT[0].header}
              body={NEW_CONCEPT[0].body}
              Picture={NEW_CONCEPT[0].Picture}
              />                                                  
                            
               <NewConcept {...NEW_CONCEPT[1]}/>    
               <NewConcept {...NEW_CONCEPT[2]}/>
               <NewConcept {...NEW_CONCEPT[3]}/>

            </ul> 
          </main>
    </div>
  );
}

export default App;

