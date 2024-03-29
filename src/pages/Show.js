import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const person = useLoaderData();
    console.log(person)

    
    return(
        <div className="person">
           <h1>{person.name}</h1>
           <h2 className="1">{person.title}</h2>
           <img src={person.image} alt={person.name}/>
        
            <h2 className="2">Update {person.name}</h2>
            <Form action={`/update/${person._id}`} method='post'>
                <input type='input' name='name' placeholder="person's name" defaultValue={person.name}/>
                <input type='input' name='image' placeholder="person's picture" defaultValue={person.image}/>
                <input type='input' name='title' placeholder="person's title" defaultValue={person.title}/>
                <input type='submit' value={`update ${person.name}`}/>
            </Form>

{/* added this */}
            <h3 className="3">Delete person</h3>
            <Form action={`/delete/${person._id}`} method='post'>
                <input type='submit' value={`Delete ${person.name}`}/>
            </Form>
{/* end of add */}

        </div>
    )
}

export default Show;