// import React from 'react';

// const withAuthenticate = Home => LoginRegister =>
// class extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             loggedIn: false
//         }
//     }
//     componentDidMount() {
//         if(!localStorage.getItem('user')) {
//             this.setState({ loggedIn: false})
//         } else {
//             this.setState({ loggedIn: true})
//         }
//     }

//         render() {
//             if (this.state.loggedIn) return <Home />;
//             if (this.state.loggedIn === false) return <LoginRegister />
//     }
// }

// export default withAuthenticate;