import React, {Fragment, useEffect, useRef, useState} from "react";
import './Hello.css'
import Input from "./Input";

function HelloWorld(props) {
    const [isTrue,setIsTrue] = useState(true)
    const [crowd,setCrowd] = useState([])
    const [firstName,setFirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [dob,setdob ]= useState("")

    //refs 
    const firstNameRef = useRef();
    const lastnameRef = useRef(null);
    const dobRef = useRef(null);


    const toggleIsTrue = () =>{
        if (isTrue) {
            setIsTrue(false);
            return
        }
        setIsTrue(true)
    }

    useEffect(() =>{
        console.log("useEffect fired!");

        let people = [
            {
                id:1,
                firstName:"john",
                lastName :"Doe",
                dob:"1999-12-04"
            },
            {
                id:2,
                firstName:"Mayn",
                lastName :"bot",
                dob:"1998-02-06"
            }
        ]
        setCrowd(people)
    }, []);

    const addPerson = (newFirst,newLast,newDOB) => {
        //create new object
        let newPerson ={
            id:crowd.length + 1,
            firstName: newFirst,
            lastName : newLast,
            dob : newDOB,
        }

        const newList = crowd.concat(newPerson)

        const sorted = newList.sort((a,b) => {
            if (a.lastName < b.lastName){
                return -1;
            } else if(a.lastName > b.lastName) {
                return 1;
            }
        return 0;
        })

        setCrowd(sorted)
        setFirstName("")
        setlastName("")
        setdob("")

        firstNameRef.current.value = ""
        lastnameRef.current.value = ""
        dobRef.current.value = ""

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (lastName !== "") {
            addPerson(firstName,lastName,dob);
        }
    }

   

    return(
        <Fragment>
            <hr></hr> 
            <h1 className="h1-red">{props.msg}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p> The current value is True</p>
                    <hr />
                </Fragment>
            }
            <hr></hr>
            {isTrue
            ? <p>Is true</p>
            : <p>Is False</p>

            }
            <hr></hr>
            <a href="#!" className="btn btn-outline-secondary"onClick={toggleIsTrue}>Toggle isTrue</a>
            <hr />
            <form autoComplete="off" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="first-name">first Name</label>
                    <input type="text" name="first-name" id="first-name" ref={firstNameRef} autoComplete="off" className="form-control" onChange={(event) => setFirstName(event.target.value)}>
                    
                    </input>
                </div>

                <Input 
                title="Last Name"
                type="text"
                name="last-name"
                ref={lastnameRef}
                autoComplete="last-name-new"
                className="form-control"
                onChange={(event) => setlastName(event.target.value)}
                 />


                <Input 
                title="Date of birth"
                type="date"
                name="dob"
                ref={dobRef}
                autoComplete="dob-new"
                className="form-control"
                onChange={(event) => setdob(event.target.value)}
                 />

                 <input type="submit" value="Submit" className="btb btn-primary"></input>
            </form>

            <div>
                First Name: {firstName} <br />
                Last Name: {lastName} <br />
                Date of birth: {dob} <br />
            </div>
            <hr />
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastName}</li>
                    ))}
            </ul>
        </Fragment>
    )
}

export default HelloWorld;