import React, { Component } from 'react'

class descs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tech: "Node",
            media: "Medium blog",
            message: "I am from class componnet, to verify the destucturing of state pls click below button.",
            bt: "connect",
            count: 0
        }
    }
    render() {
        const { tech, media, message, bt, count } = this.state
        const messageHandler = () => {
            this.setState({
                count: this.state.count + 1
            })
            if(count%2==0){
                this.setState({
                    message: "I am from class componnet, to verify the destucturing of state pls click below button.",
                    bt: "connect",
                })
            }
            else{
                this.setState({
                    message: "ThankYou for Verifying, Sucessfully connected.",
                    bt: "Disconnect",
                })
            }
        }
        return (
            <div>
                <h1>Hello {tech} developer, Let's connect on {media}</h1>
                <p>{message}</p>
                <button onClick={messageHandler}>{bt}</button>
            </div>
        )
    }
}

export default descs