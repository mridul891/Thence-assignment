import Box from "./Box"
import Navbar from "./Navbar"
import '../index.css'
import FAQ from "./FAQ"
import Footer from "./Footer"
import Main from "./Main"

const Landing = () => {
    return (
        <div>
            <Box className="box" >
                <Navbar />
                <Main />
                <FAQ />
                <Footer />
            </Box>
        </div>
    )
}

export default Landing