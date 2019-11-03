import React from 'react';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';

import {Container, Column, CenteredColumn, Title, Description, Small, Feature, FeatureList, CheckIcon} from '../shared';
import A from '../elements/a';

const Section = styled.section`
    background-color: #f7f7f7;
    padding: 48px 24px 24px;

    @media screen and (min-width: 1000px) {
        padding: 128px;
    }
`;

const AuthorImage = styled.img`
    width: 150px;
    border-radius: 150px;
`;

const MeetTheAuthor = styled(Small)`
    margin-bottom: 40px;
`;

const Email = styled.a`
    color: black;
    text-decoration: none;
`;

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    }
};

const item = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
};

const AuthorSection = () => {
    const [ref, inView] = useInView();

    return (
        <Section>
            <Container>
                <Column ref={ref}>
                    <Title as="h3">
                        <span>{'Who Is This For?'}</span>
                    </Title>
                    <Description>
                        {
                            'You will be expected to be familiar with basic HTML, CSS, JavaScript, and React. We’ll utilize the latest JavaScript features and best practices for 2019.'
                        }
                    </Description>
                    <Description>
                        {"If you're still not sure if this is for you, feel free to "}
                        <Email href="mailto:me@leerob.io">{'email me'}</Email>
                        {' and ask.'}
                    </Description>
                    <FeatureList>
                        <Feature>
                            <CheckIcon src="/static/images/check.svg" />
                            {'Beginner Friendly'}
                        </Feature>
                        <Feature>
                            <CheckIcon src="/static/images/check.svg" />
                            {'Open-Source Code'}
                        </Feature>
                        <Feature>
                            <CheckIcon src="/static/images/check.svg" />
                            {'High-Quality Video & Audio'}
                        </Feature>
                    </FeatureList>
                </Column>
                <CenteredColumn>
                    <AuthorImage src="/static/images/lee.jpg" />
                    <MeetTheAuthor>{'Meet The Author'}</MeetTheAuthor>
                    <Description>
                        <A href="https://leerob.io" underline>
                            {'Lee Robinson'}
                        </A>
                        {
                            ' is a full-stack developer, writer, and creator from the Midwest. He’s used React & Next.js extensively in his professional career and for freelance clients.'
                        }
                    </Description>
                    <Description>
                        {
                            'Lee has spoken across the country at conferences and meet-ups about front-end development and design. He’s also a part-time videographer and musician. '
                        }
                    </Description>
                </CenteredColumn>
            </Container>
        </Section>
    );
};

export default AuthorSection;