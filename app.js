const App = (props) => {

    const [state, setState] = React.useState({data: 'Catherine'});

    console.log(setState);
     React.useEffect(()=> {
        fetch('/api')
        .then((response)=> response.json())
        .then((json)=> setState({ ...json}));
     }, [])


    return <h1>Hello World, {state.data}</h1>

};

ReactDOM.render(<App/>, document.getElementById('root'))