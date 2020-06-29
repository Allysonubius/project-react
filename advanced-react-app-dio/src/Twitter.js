import React, {Component} from 'react'

class Twitter extends Component {

    state = {
        tweet:'title'
    }
    
    componentDidMount(){
        const {posts, loading} = this.props
        console.log('componentDidMount', posts)
        console.log('componetDidMount:loading', loading)
    }

    componentDidUpdate(prevProps){
        const {loading} = this.props
        if (this.props.loading !== prevProps.loading){
            console.log('componentDidUpdate:loading', loading)
        }
    }

    componentWillUnmount(){
        console.log('componetWillUnmount: fui removido: ()')
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.tweet !==nextState.tweet || nextProps.loading
    }

    render(){
        const {posts} = this.props
        console.log('render', posts)
        return(
            <div>Hello</div>
        )
    }
}

export default Twitter