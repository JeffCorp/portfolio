import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { HeroBG, HeroBGLeft, HeroBGLeft2, HeroBGRight, HeroHeading, HeroPreHeading } from "./style";
import Jeff from '../images/jeff.jpeg';
import Scorenshare from '../images/scorenshare.png';
import Topfootball from '../images/topfootball.png';
import Slydo from '../images/slydo.png';
import theme from "../../theme";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Projects = () => {
    const projectList = [
        {
            title: 'ScoreNshare',
            image: Scorenshare,
            description: 'This is a musical platform that provides musical scores or sheet music to musicians and also gives them a platform to showcase their artistic potential.',
            link: 'https://scorenshare.com/'
        },
        {
            title: 'Top Football Trials UK',
            image: Topfootball,
            description: 'A football scout website for a UK company has been successfully developed, launched, and is being managed at the present time. The website is positioned to organize football competitions to display players while FA-licensed scouts and agents are on hand to capture their talents and skills.',
            link: 'https://topfootballtrials.co.uk/'
        },

        {
            title: 'Slydo',
            image: Slydo,
            description: 'Slydo is your all-in-one ecommerce, payment, and social media platform. Sell products, accept payments, and engage with customers all in one place.',
            link: 'https://slydo.co'
        },

    ]
    const [currentProject, setCurrentProject] = useState(
        {
            title: 'ScoreNshare',
            image: Scorenshare,
            description: 'This is a musical platform that provides musical scores or sheet music to musicians and also gives them a platform to showcase their artistic potential.'
        }
    )

    return (
        <Box sx={{ display: 'flex', justifyContent: 'start', height: '100vh', marginTop: '100px', flexDirection: 'column', background: `url(${currentProject.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '30px', backgroundAttachment: 'fixed' }}>
            <Box sx={{ background: 'linear-gradient(to right, #000000dc, #000000)', height: '100%', padding: '40px', borderRadius: '30px' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', minHeight: '80vh', width: '100%', alignItems: 'center', paddingBottom: '40px' }}>
                    <HeroHeading>
                        Projects
                    </HeroHeading>
                    <Box sx={{ width: '90%', height: '100%', gap: '50px', display: 'flex', marginTop: '15vh' }}>
                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ height: '200px', background: `url(${currentProject.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></Box>
                        </Box>
                        <Box sx={{ flex: 2 }}>
                            <Typography sx={{ color: '#5F499E', fontSize: '26px', fontWeight: 700, fontFamily: 'Roboto' }}>
                                {currentProject.title}
                            </Typography>
                            <Typography sx={{ width: '70%' }}>
                                {currentProject.description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px', height: '400px', width: '90%', alignItems: 'center' }}>
                        <IconButton>
                            <ArrowBackIos />
                        </IconButton>
                        {
                            projectList.map((project, i) =>
                                <Box onClick={() => setCurrentProject(project)} key={i} sx={{ flex: 1, height: '180px', background: `url(${project.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></Box>
                            )
                        }
                        <IconButton>
                            <ArrowForwardIos />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects;