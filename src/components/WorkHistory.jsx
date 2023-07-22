import { Box, Button, Link, Typography } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from "react";
import { HeroHeading } from "./style";

const WorkHistory = () => {
    const [history] = useState([
        {
            title: "BYOLATE TECH (NETHERLANDS)",
            subtitle: `POSITION: REMOTE SOFTWARE DEVELOPER`,
            desc: `I worked on a couple of web applications, fixing some bugs and adding new functionalities.
            I was tasked with building an application to perform stress testing on other web APIs`,
            duration: "2020 - Present",
        },
        {
            title: "EFULL TECHNOLOGY NIGERIA LIMITED",
            subtitle: "POSITION: SOFTWARE DEVELOPER",
            desc: `
            - Integrated design feedback to build and maintain user-centered software applications.
            Coded programs in diverse programming languages based on specific functionality requirements.
            `,
            duration: "2019 - 2022",
        },
        {
            title: "NATIONAL YOUTH SERVICE CORP",
            subtitle: `P.P.A: BANODEX INTERNATIONAL LIMITED
            POSITION: TECHNICAL SUPPORT PERSONNEL`,
            // desc: `After my posting to the company, I built and deployed the company’s website, created a platform which made it very easy for
            // the company to manage its clientele’s subscription, send notifications and many more.
            // I was able to come up with innovative ideas to automate some of their processes.
            // I was also involved in the installation process of fiber optic and microwave internet service
            // and some other miscellaneous activities like bring a liaison for the company with 9mobile,
            // Cobranet, Kkontech engineers and operatives.`,
            duration: "2017 - 2018",
        },
        {
            title: "INTERNSHIP AT NIGERIAN CIVIL AVIATION AUTHORITY (N.C.A.A)",
            subtitle: "DEPARTMENT: MAINTENANCE",
            // desc: `As an intern, I was part of the team that was responsible for the seamless operation of all digital devices in 
            // the organization and repairs of faulty devices. I was able to inspire my fellow interns and some of the staff in my department, teaching
            // them some computing skills like web design, basic software maintenance and troubleshooting,
            // and many more. I was able to bring up proactive measures and put in place fallback measures should in case
            // we ran out of some basic hardware supplies.`,
            duration: "2014 - 2015",
        },
    ])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'start', minHeight: '90vh', marginTop: '200px', flexDirection: 'column', gap: '50px' }}>
            <HeroHeading>
                Work History
            </HeroHeading>
            <Box>
                <VerticalTimeline>
                    {history.map((job, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff' }}
                            contentArrowStyle={{ borderRight: `7px solid rgba(66, 66, 66, 0.31)` }}
                            date={job.duration}
                            iconStyle={{ background: `rgb(29, 28, 28)`, color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-title font-weight-bold">{job.title}</h4>
                            <h5 className="vertical-timeline-element-subtitle">{job.subtitle}</h5>
                            <p>{job.desc}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Box>
        </Box>
    )
}

export default WorkHistory;