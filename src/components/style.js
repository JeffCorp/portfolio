import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const HeroHeading = styled(Typography)({
    // textShadow: '0px 2px 3px #a9b8e0',
    fontSize: '80px',
    // color: '#a9b8e0'
    fontWeight: 700,
    color: '#FFF',
    fontStyle: 'normal'
})

export const HeroPreHeading = styled(Typography)({
    // color: '#4bbba7',
    color: '#FFF',
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    borderBottom: '21px solid #5F499E',
    width: 'fit-content',
    paddingRight: '42px'
})

export const HeroBG = styled(Box)({
    position: 'absolute',
    left: 0,
    width: '40vw',
    height: '100%',
    aspectRatio: '1 /1',
    //   - webkit - clip - path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
    clipPath: 'polygon(0 0, 0 40vw, 100% 40px, 100% 0)'
})

export const HeroBGLeft = styled(Box)({
    position: 'absolute',
    zIndex: 2,
    left: 0,
    background: '#1e334ffd',
    width: '40vw',
    height: '100%',
    aspectRatio: '1 /1',
    clipPath: 'polygon(0 0, 0 42vw, 100% 40px, 100% 0)'
})

export const HeroBGLeft2 = styled(Box)({
    position: 'absolute',
    zIndex: 1,
    left: 0,
    background: '#1e334f',
    width: '42vw',
    height: '100%',
    aspectRatio: '1 /1',
    clipPath: 'polygon(0 0, 0 42vw, 100% 40px, 100% 35px);'
})

export const HeroBGRight = styled(Box)({
    position: 'absolute',
    background: '#1e334f',
    right: 0,
    bottom: 0,
    width: '40vw',
    height: '100%',
    aspectRatio: '1 /1',
    //   - webkit - clip - path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
    // clip-path: polygon(0 100%, 0 41vw, 100% 137px, 100% 0);
    clipPath: 'polygon(0 0, 0 42vw, 100% 40px, 100% 0)'
})