function StatePage({ props }){
    const get_person = () => {
        props.get_card_data();
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    USER CARD
                </div>
                <div className="card-body">
                    <h5 className="card-title">User:</h5> 
                    <p className="card-text">Surname: { props.state.person.surname ? props.state.person.surname : 'SURNAME'}</p> 
                    <p className="card-text">Name:    { props.state.person.name    ? props.state.person.name    : 'NAME'}</p> 
                    <p className="card-text">Age:     { props.state.person.age     ? props.state.person.age     : 'AGE'} </p>
                    <button className="btn btn-primary" onClick={ () => { get_person() } }>Get</button>
                </div>
            </div>
        </div>
    );
}

export default StatePage;