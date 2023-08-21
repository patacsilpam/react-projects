import propTypes from 'prop-types'
const List = ({people,img,article}) => {   
    return(
        <>
        {people.map((person) => {
            const {id, name, age, image} = person;
            return (
                <article key={id} className={article}>
                    <img src={image} alt={name} className={img}/>
                    <div className='mx-3'>
                        <p>{name}</p>
                        <p>{age}</p>
                    </div>
                </article>
                
              )
        })}
        </>
    )
}
/*
applied propTypes and pass multiple props
utilized Tailwind CSS
utilized callback function "map()"
*/
List.propTypes = {
    people: propTypes.array.isRequired,
    img:propTypes.string.isRequired,
    article:propTypes.string
}
export default List
