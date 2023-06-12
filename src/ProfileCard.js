import {useState} from "react"


function ProfileCard ({titulo,handle,img}) {

    const [count,setCount] =useState(0)
    
const handleClickSuma = () => {
 setCount( count + 1)

}

const handleClickResta = () => {
    if (count >0){
       setCount (count -1)
    }
}




    return (
        <div className="card">
            <div className="card-img">
                <figure>
                    <img src={img} alt="logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <div>El titulo es {titulo}</div>
                    <p>El handle es: {handle}</p>


                        <div className="columns">

                            <div className="column">
                            <button onClick={handleClickSuma} className="button is-primary is-fullwidth"> Sumar </button>
                            </div>

                            <div className="column">
                            <span> <p>{count}</p></span>
                            </div>

                            <div className="column">
                            <button onClick={handleClickResta} className="button is-danger is-fullwidth"> Restar </button>

                            </div>

                        </div>


                </div>
               
            </div>
       
        </div>
    )
}

export default ProfileCard