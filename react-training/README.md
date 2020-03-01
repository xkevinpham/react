React Training

Components | IdCard
Create a IdCard component with 6 props:

lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string

Example

<IdCard 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard 
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
Output

image

Components | Greetings
Create a Greetings component with 2 props:

lang: A string that could be ,"de","en","es","fr"
children: A text
Example

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
Output

image

Components | Random
Create a Random component with 2 props:

min: A number
max: A number
Example

<Random min={1} max={6}/>
<Random min={1} max={100}/>
Output

image

Output

image

Components | BoxColor
Create a BoxColor component that displays a rectangle with a background color based on props. For this, you will need a inline style (documentation).

It takes 3 props:

r: A number between 0 and 255 representing the amount of red
g: A number between 0 and 255 representing the amount of green
b: A number between 0 and 255 representing the amount of blue
Example

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
Output

image

As a bonus, you can also display the hex values of the color (ex: #ff0000 for red).

Components | CreditCard
Create a CreditCard component that displays a square with a background color based on props. For this. You will need a styled component.

It takes 8 props:

type: A string that can be "Visa" or "Master Card"
number: A string that is number of the credit card. You will only display the 4 last digits for security reasons 😉
expirationMonth: A number that represents the month, between 1 and 12
expirationYear: A number that represents the year
bank: A string that represents the name of the bank
owner: A string the reprensents the name of the owner
bgColor: A string for the background color of the card
color: A string for the text color of the card
Take your time to do as close to the output. You probably have to use flexbox.

Example

<CreditCard 
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
<CreditCard 
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222" />
<CreditCard 
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" />
Output

image

Components | Rating
Create a Rating component that displays 5 stars, some of them must be empty (☆), some must be full (★).

It takes 1 props:

children: A number between 0 and 5. Be careful, it can be a float number. If it's 3.9, it will display 4 stars.
Example

<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
Output

image

Components | DriverCard
Example

<DriverCard 
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
<DriverCard 
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }} />
Output

image

State | LikeButton
Create a component LikeButton that displays a button "0 Likes" and with a number increases when the user clicks on it.

As a bonus, you can change the background color and set it to one of these: ['purple','blue','green','yellow','orange','red']

Example

<LikeButton /> <LikeButton />
Output



State | ClickablePicture
Create a component ClickablePicture that displays a picture and toggle to the next picture on click.

Example

<ClickablePicture
  img="/img/persons/maxence.png"
  imgClicked="/img/persons/maxence-glasses.png" />
Output



PS: If you want your own picture instead, you can do it yourself with this picture: http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png 😎

State | Dice
Create a Dice component that display a random picture (example: '/img/dice3.png'). Then everytime the user clicks on the component:

An empty picture is displayed ('/img/dice-empty.png')
1 second later, a new random picture is displayed (example: '/img/dice6.png').
Example

<Dice />
Output before a click

image

Output 1 millisecond after a click

image

Output 1 second after a click

image

State | Carousel
Create a Carousel component that displays an image and two buttons ('left' and 'right') and that changes the picture everytime.

Example

<Carousel
  imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />
Output



List and Keys | NumbersTable
Create a NumbersTable component that displays a list of numbers between 1 and a limit. Even numbers must be red.

It takes 1 props:

limit: A number.
Example

<NumbersTable limit={12} />
Output

image

List and Keys | FaceBook | Simple
Create a FaceBook component that displays the list of all profiles from src/data/berlin.json. You will probably have to write:

import profiles from './data/berlin.json'
Example

<FaceBook />
Output (you should see about 28 profiles)

image

List and Keys | FaceBook | Advanced
On your FaceBook component, add as many buttons as you have country. Then, when the user clicks on one of the button (example: 'USA'), add a blue background to all the profiles where their country is the one selected.

Example

<FaceBook />
Output (you should see more profiles and more countries)

image

Example of extra iterations:

By default, only display the picture. Then, when a user clicks on a picture, display more informations
Add sort buttons
Add a search input
Form | SignupPage
Create a SignupPage component with the following elements:

A input "email" (bonus: make the input green/red when the email is valid/invalid)
A input "password" (bonus: make the input green/red when the password is strong/weak)
A select input "nationality" (possible values: "en","de","fr")
A text "Hello", "Hallo" or "Bonjour" based on the selected nationality
A text "Your email is john@doe.com"
For this, you will need 3 states:

email
password
nationality
If you want to include Bootstrap with Reactstrap, you should run

npm install reactstrap bootstrap
And add the following line in src/index.js

import 'bootstrap/dist/css/bootstrap.min.css';
Example

<SignupPage />
Output

image

Lifting State Up | RGBColorPicker
Create 2 components:

RGBColorPicker:
state.rValue: A number between 0 and 255, representing the amount of red
state.gValue: A number between 0 and 255, representing the amount of green
state.bValue: A number between 0 and 255, representing the amount of blue
SingleColorPicker: A box with an input range to select an amount of a value
props.color: A string that is either "r", "g" or "b"
props.value: A number between 0 and 255
props.onChange: A method that is triggered when the input is changed
Output

image