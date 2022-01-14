import { Link } from "react-router-dom"


const NextBtn = ({link}) => {
    return (
        <>
            <Link to={link} className="next">next</Link>
        </>
    )
}

export default NextBtn
