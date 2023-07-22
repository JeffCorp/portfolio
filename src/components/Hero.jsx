import { Box, Button, Link, Typography } from "@mui/material";
import { HeroBG, HeroBGLeft, HeroBGLeft2, HeroBGRight, HeroHeading, HeroPreHeading } from "./style";
import Jeff from '../images/jeff.jpeg';
import CartoonJeff from '../images/cartoon_jeff.png';
import theme from "../../theme";
import { GitHub, Instagram, LinkedIn, MailOutline, Twitter } from "@mui/icons-material";

const Hero = () => {
    const stack = ['Javascript', 'React', 'NodeJs', 'Android (Java)', 'Laravel', 'Python', 'Flutter', 'Dart', 'CSS', 'HTML']

    return (
        <Box sx={{ p: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            {/* <HeroBGLeft />
            <HeroBGLeft2 /> */}
            {/* <HeroBGRight /> */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '10px 0px', height: '100vh' }}>
                <Box sx={{ width: '60%', zIndex: '2', paddingTop: '50px' }}>
                    <HeroPreHeading color="secondary">I&apos;m</HeroPreHeading>
                    <HeroHeading>
                        Jeffrey Ukutegbe.
                    </HeroHeading>
                    <Typography sx={{ color: '#5F499E', fontSize: '26px', fontWeight: 700, fontFamily: 'Roboto' }}>
                        A Full-stack Engineer
                    </Typography>
                    <Box sx={{ marginTop: '22px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {
                            stack.map((tech, i) =>
                                <Typography key={i}
                                    sx={{
                                        padding: '7px 22px',
                                        background: '#18191B',
                                        color: '#ACAFB5',
                                        borderRadius: '10px',
                                        width: 'fit-content'
                                    }}>{tech}</Typography>)
                        }
                    </Box>
                    <Box sx={{ paddingTop: '22px', display: 'flex', gap: '55px', position: 'absolute', bottom: '20px' }}>
                        <Link href="https://www.linkedin.com/in/jeffcorp/" sx={{ color: 'white' }}>
                            <LinkedIn className="clickable" />
                        </Link>
                        <Link href="https://github.com/JeffCorp" sx={{ color: 'white' }}>
                            <GitHub className="clickable" />
                        </Link>
                        <Link href="mailto:jeffukus@gmail.com" sx={{ color: 'white' }}>
                            <MailOutline className="clickable" />
                        </Link>
                        <Link href="https://www.instagram.com/jeffreyukus/" sx={{ color: 'white' }}>
                            <Instagram className="clickable" />
                        </Link>
                        <Link href="https://twitter.com/JeffreyUkutegbe" sx={{ color: 'white' }}>
                            <Twitter className="clickable" />
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ width: '40%', paddingTop: '50px', height: '100vh' }}>
                    <img src={CartoonJeff} style={{ width: '50%', position: 'absolute', right: 20, bottom: 0 }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Hero;