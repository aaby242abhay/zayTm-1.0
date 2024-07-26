import axios from 'axios';

function useTodos(n){
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
       setInterval(()=>{
            axios.get('https://jsonplaceholder.typicode.com/todos')         //this wiil hit every n seconds to get the data but the first hit will be after n seconds
                .then((resp) =>{
                    setTodos(resp.data);
                    setLoading(false);
                })
       },n*1000)
       axios.get('https://jsonplaceholder.typicode.com/todos')              //hitting before the first interval in order to get the data
                .then((resp) =>{
                    setTodos(resp.data);
                    setLoading(false);
                })
    }, [])
    // const loading = todos.length === 0;         //if the lenghth of todos is 0, then loading is true
    return {todos, loading};
}

function App2(){
    const {todos, loading} = useTodos(5);

    return(
        <>
            {loading && <div>Loading...</div>}
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </>
    )
}