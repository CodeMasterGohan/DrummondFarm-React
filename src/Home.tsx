import React from 'react'
import plex from './images/plex.png'
import babybuddy from './images/babybuddy.png'
import barn from './images/barn.png'
import gitlab from './images/gitlab.png'
import mealie from './images/mealie.png'
import photoprism from './images/photoprism.png'
import syncthing from './images/syncthing.png'
import Nav from './components/Nav/Nav'

type CardProps = {
    imgSrc: string;
    title: string;
    description: string;
    link: string;
}

function Card({ imgSrc, title, description, link }: CardProps) {
    return (
        <div className="float-lg-left m-2 col d-flex justify-content-center">
            <div className="card h-100" style={{ width: '14rem' }}>
                <img className="card-img-top" src={imgSrc} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{description}</p>
                    <a href={link} target="_blank" className="stretched-link"></a>
                </div>
            </div>
        </div>
    );
}

function Home() {
    return (

        <div className="row justify-content-center d-flex">
<Nav />
                    

            <Card
                imgSrc={plex}
                title="Plex"
                description="The Plex Media Server organizes video, audio, and photos from a user's collections"
                link="https://plex.drummondfarm.win"
            />
            <Card
                imgSrc={babybuddy}
                title="BabyBuddy"
                description="Tracks all things baby"
                link="https://baby.drummondfarm.win"
            />
            <Card
                imgSrc={gitlab}
                title="GitLabCE"
                description="The community edition of a web-based DevOps lifecycle tool that provides a Git repository"
                link="https://gitlab.drummondfarm.win/"
            />
            <Card
                imgSrc={mealie}
                title="Mealie"
                description="Mealie is a self hosted recipe manager"
                link="https://mealie.drummondfarm.win/"
            />
            <Card
                imgSrc={photoprism}
                title="PhotoPrism"
                description="PhotoPrism is a self hosted photo manager"
                link="https://photo.drummondfarm.win/"
            />
            <Card
                imgSrc={syncthing}
                title="Syncthing"
                description="SyncThing is a thing that Syncs"
                link="https://syncthing.drummondfarm.win/"
            />
        </div>
    );
}

export default Home;