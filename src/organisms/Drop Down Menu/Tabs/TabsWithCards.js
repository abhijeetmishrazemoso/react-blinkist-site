import { Box } from '@material-ui/core';
import React from 'react';
import BookCard from '../../BookCard';
import TabbedBooks from './TabbedBooks';

function getNewBookCard(imageSrc,readingTabProp, title, subtitle, index, key, updateState){
    return (<BookCard  imageSrc={imageSrc} readingTabProp={readingTabProp} 
        title={title} subtitle={subtitle} index={index} key={key} updateState={updateState}/> );

}
function getCompleteTab(currReadingBookCards,currFinishedBookCards){
    return (<TabbedBooks booksCurrReading={currReadingBookCards} booksFinished={currFinishedBookCards}/>);
}

function getDummyNode(index){
    return (<Box component="span" key={index} index={index}></Box>);
}
export default function TabsWithCards({ imageSrc }) {
    const currReading = [];
    const currFinished = [];
    const reading ="reading";
    const finished = "finished";
    let key = 0;

    currReading[key] = (<BookCard  imageSrc={imageSrc} readingTabProp={reading} 
        title="Nature and Man" subtitle="Does this not go anywhere?" index={key} key={key++} updateState={updateTabs}/> );
        
    currReading[key]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} index={key}
            title="Politics & Science" subtitle="There you have it, the yards of socialism" key={key++} updateState={updateTabs}/>);
            
    currReading[key]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} index={key}
            title="Society and Pschycology" subtitle="Does this have a fortune?" key={key++} updateState={updateTabs}/>);
                
    console.log(currReading.length);
              
    const [currReadingBookCards, setCurrReadingBookCards] = React.useState(currReading);
    const [currFinishedBookCards, setCurrFinishedBookCards] = React.useState(currFinished);
    const [completeTab,setCompleteTab] = React.useState(
        getCompleteTab(currReadingBookCards,currFinishedBookCards));

    function updateTabs(index, previousReadingState){
        if(previousReadingState === reading){
            const tempBookCard = currReading[index];
            console.log(`Index is ${index}`);
            if(tempBookCard === undefined) {
                return;
            }
            const propss = tempBookCard.props;
            //get a new card with updated state
            currFinished[index] = getNewBookCard(propss.imageSrc, finished,
                propss.title, propss.subtitle, index, propss.key, updateTabs);
            currReading[index] = getDummyNode(index);
        }else{
            const tempBookCard = currFinished[index];
            const propss = tempBookCard.props;
            currReading[index] = getNewBookCard(propss.imageSrc, reading,
                propss.title, propss.subtitle,propss.key, propss.key, updateTabs);
            currFinished[index] = getDummyNode(index);
        }
        setCurrReadingBookCards(currReading);
        setCurrFinishedBookCards(currFinished);
        setCompleteTab(getCompleteTab(currReading,currFinished));
        console.log(currReadingBookCards);
        console.log(currFinishedBookCards);
    }
    
            
    return completeTab;
}
