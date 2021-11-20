const FirstProject = (props) => {
    const nomeRecebido = props.name
    const imageRecebido = props.image
    const descriptionRecebido = props.description
    return(
        <>
            <h3>{nomeRecebido}</h3>
            <img src={imageRecebido} />
            <p>{descriptionRecebido}</p>
        </>        
    )
}

export default FirstProject;

