const UserProfile = (props) => {
    return(
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', backgroundColor:'orange' }}>
            <h2 style={{ color: 'blue', fontSize: '20px' }}>Name: {props.name} </h2>
            <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '17px' }}> Age: {props.age} </p>
            <p style= {{ color: 'blue', fontWeight: 'normal', fontSize: '17px'}}> Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
