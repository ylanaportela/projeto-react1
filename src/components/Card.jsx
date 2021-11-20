import characters from "../data/charactersHowIMetYourMother.js";
import FirstProject from "./FirstProject.js";

const Card = () => {
    return(
        <>  
            <div className='container'>
                {characters.map((character) =>{
                    return (
                        <div key={character.id} className="card">
                            <FirstProject description={character.description} image={character.image} name={character.name} />
                        </div>
                    )})
                }
            </div>
        </>  
    )
}

export default Card;