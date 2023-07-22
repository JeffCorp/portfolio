import { Box, Container, Paper, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Paper sx={{
            width: '100%',
            bottom: 0,
            // position: 'absolute'
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                    <div>
                        <img src="/Logo.svg" width={75} height={30} alt="Logo" />
                    </div>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="wheat">
                        Copyright © 2023. Limited
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
}

export default Footer;