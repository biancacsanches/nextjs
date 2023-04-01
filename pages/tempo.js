import React  from "react"

function Tempo(props){

    const [hydrated, setHydrated] = React.useState(false)
    React.useEffect(() => {
        setHydrated(true)
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null
    }
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return <div>
        <div>{dynamicDateString} dinâmica</div>
        <div>{props.staticDateString} estática</div>
    </div>
        
    

}

export function getStaticProps(){
const staticDate = new Date()
const staticDateString = staticDate.toGMTString()

return {
    props:{
        staticDateString
    },
    revalidate:10
}

}
export default Tempo