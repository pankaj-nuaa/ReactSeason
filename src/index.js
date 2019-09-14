import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



class App extends React.Component {

    state = {
        lat: null,
        errorMessage: '',
        time: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
        console.log(new Date().toLocaleTimeString())

    }

    componentDidUpdate() {
        console.log('My component did update')
    }

    renderContent() {
        console.log('Render content was invoked??')
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message='Please accept location request' />
    }
    render() {
        return (



            < div>
                {/* setInterval(() => {
                    this.setState(new Date().toLocaleTimeString())
                }, 1000); */}
                {this.renderContent()}

            </div >

        )

    }
}






ReactDOM.render(<App />, document.getElementById('root'));