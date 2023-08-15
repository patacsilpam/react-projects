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
List.propTypes = {
    people: propTypes.array.isRequired,
    img:propTypes.string.isRequired,
    article:propTypes.string
}
export default List
