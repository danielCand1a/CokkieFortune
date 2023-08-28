
const Quote = ({phrase}) => {
  return (
    <>
    <p className="container__phrase">{phrase.phrase}</p>
    <p className="author">- {phrase.author}</p>
    </>
  )
}

export default Quote