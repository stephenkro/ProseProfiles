import ActionCard from "./Card";
import './Home.css'

export const Home = () => {
    const mainServices = [
        {
            name: "Script Editing",
            imageUrl: "/ScriptEditImg.jpg",
            description:
                "This service includes a full read-through of your script. It is recommended that this is as close to complete as possible for well-rounded constructive feedback. After the initial consultation, you will be provided a feedback document tailored to address story, character, dialogue, structure, pacing, and other highlights.",
        },
        {
            name: "Script Adaptation", 
            imageUrl: "/ScriptAdaptImg.jpg",
            description: `It’s no secret that most entertainment companies prefer known and proven IPAs. This is a service that can take your adaptation idea to the next level with a speculative script that offers a glimpse into what your adaptation idea might look like in script form after an initial consultation. Adaptation ideas from novels, webtoons, comics, and other mediums are welcome.`
        },
        {
            name: "Script Polishing",
            imageUrl: "/ScriptPolishImg.jpg",
            description: `You are done with your script, ready to submit to script contest and pitch to anyone and everyone, but you just need a second (or third) pair of eyes to make sure you’ve dotted your i’s and crossed your t’s both literally and figuratively. After an initial consultation, get ready for a detailed read-through of your final script.`
        }, 
        {
            name: "Podcast Scripting", 
            imageUrl: '/PodcastScriptImg.jpg', 
            description: `Podcast scripting can include a look into a barebones script or outline for optimizing flow, structure, and engagement throughout. Or if you have a fully scripted podcast backed with research and specific story beats and would like to consult a reader (or even a listener), consider getting an expert to weigh in after an initial consultation.`
        }, 
        {
            name: "Novel Editing", 
            imageUrl: '/NovelEditImg.jpg',
            description: `You have a novel and would like a full read-through complete with analysis, line edits, and properly structure feedback. This is usually recommended for writers before they start sending out query letters to publishers and agents. During the initial consultation, writers can elaborate on their pain-points, their expectations, and their overall goals.`
        },
        {
            name: 'Novel Polishing', 
            imageUrl: '/NovelPublishImg.jpg',
            description: `You have a complete novel that needs a second (or third) pair of eyes for name consistency, punctuation, grammar, and other items that fall under line edits. Other areas of feedback will be discussed during the initial consultation.`
        }
        
    ];
    return (
        <div className={'Homebar'}>
            {mainServices.map((service)=> {
                return <div><ActionCard name={service.name} imageUrl={service.imageUrl} description={service.description}/></div>
            })}
        </div>
    );
};
