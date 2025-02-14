import './App.css';
import IdCard from './components/misc/IdCard/IdCard';
import Greetings from './components/misc/Greetings/Greetings';
import Random from './components/misc/Random/Random';
import BoxColor from './components/misc/BoxColor/BoxColor';
import CreditCard from './components/misc/CreditCard/CreditCard';
import Rating from './components/misc/Rating/Rating';
import DriverCard from './components/misc/DriverCard/DriverCard';
import LikeButton from './components/misc/LikeButton/LikeButton';
import ClickablePicture from './components/misc/ClickablePicture/ClickablePicture';
import Dice from './components/misc/Dice/Dice';
import Carousel from './components/misc/Carousel/Carousel';
import NumbersTable from './components/misc/NumbersTable/NumbersTable';
import FaceBook from './components/misc/FaceBook/FaceBook';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Cristiano'
        firstName='Ronaldo'
        gender='male'
        height={185}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Fernando '
        firstName='Alonso'
        gender='male'
        height={175}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="de">Ludwig</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
    
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
    
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      <LikeButton/>
      <ClickablePicture
        img='./assets/images/maxence.png'
        imgClicked='./assets/images/maxence-glasses.png'
      />
       <Dice/>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/44.jpg',
          'https://randomuser.me/api/portraits/men/44.jpg',
          'https://randomuser.me/api/portraits/women/43.jpg',
          'https://randomuser.me/api/portraits/men/43.jpg'
        ]}
      />
      <NumbersTable limit={12}/>
      <FaceBook />
    </div>
  );
}

export default App;
