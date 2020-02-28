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