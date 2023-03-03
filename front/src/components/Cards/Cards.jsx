import Card from '../Card/Card';


export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div>
         {
            characters.map((ele,indice) => {
               return (
                  <Card 
                  key = {indice}
                  name={ele.name}
                  species={ele.species}
                  gender={ele.gender}
                  image={ele.image}
                  onClose={onClose}
                  id ={ele.id}
                  />
               )
            })
         }
      </div>
   )
}
