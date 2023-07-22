import { Box, Button, Link, Typography } from "@mui/material";
import { HeroBG, HeroBGLeft, HeroBGLeft2, HeroBGRight, HeroHeading, HeroPreHeading } from "./style";
import Jeff from '../images/jeff.jpeg';
import CartoonJeff from '../images/cartoon_jeff.png';
import theme from "../../theme";

const About = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'start', height: '50vh', marginTop: '100px', flexDirection: 'column', gap: '50px' }}>
            <HeroHeading>
                About Me
            </HeroHeading>
            <Typography sx={{ width: '70%' }}>
                Talented Software Engineer equipped with technical abilities and decisive nature necessary for successful job development. Expert in gathering requirements, designing systems, and optimizing code. Focused and adaptable professional skilled at flexing to various positions to meet company and customer needs. <br />
                Methodical and highly skilled Software engineer with an extensive background in developing and deploying various software programs. Collaborates well with managers and technical staff to produce reliable and forward-thinking designs. Coordinates projects according to customer requirements and consistently provides prompt and quality service.
            </Typography>
        </Box>
    )
}

export default About;