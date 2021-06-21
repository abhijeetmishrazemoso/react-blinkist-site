import { Box } from '@material-ui/core';
import React from 'react';
import BookCard from '../../BookCard';
import TabbedBooks from './TabbedBooks';

function getNewBookCard(imageSrc,readingTabProp, title, subtitle, index, key, updateState){
    console.log(`index is ${index} and key is ${key}`);
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
        title="Nature and Man" subtitle="Does this not go anywhere?" index={key} key={String(key++)} updateState={updateTabs}/> );
        
    currReading[key]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} index={key}
            title="Politics & Science" subtitle="There you have it, the yards..." key={String(key++)} updateState={updateTabs}/>);
            
    currReading[key]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} index={key}
            title="Society and Pschycology" subtitle="Does this have a fortune?" key={String(key++)} updateState={updateTabs}/>);
                
    function addDummyDataToArray(length, array){
        for (let index = 0; index < length; index++) {
            array[index] = getDummyNode(index);
        }
    }
    addDummyDataToArray(currReading.length, currFinished);
    const [currReadingBookCards, setCurrReadingBookCards] = React.useState(currReading);
    const [currFinishedBookCards, setCurrFinishedBookCards] = React.useState(currFinished);
    const [completeTab,setCompleteTab] = React.useState(
        getCompleteTab(currReadingBookCards,currFinishedBookCards));

    async function updateTabs(index, previousReadingState){
        console.log(`updateTabs method called with index-${index} & prevReadState- ${previousReadingState}`);
        if(previousReadingState === reading){
            const tempBookCard = currReading[index];
            if(tempBookCard === undefined) {
                return;
            }
            const propss = tempBookCard.props;
            //get a new card with updated state
            currFinished[index] = getNewBookCard(propss.imageSrc, finished,
                propss.title, propss.subtitle, index, index, updateTabs);
            currReading[index] = getDummyNode(index);
        }else{  
            const tempBookCard = currFinished[index];
            const propss = tempBookCard.props;
            currReading[index] = getNewBookCard(propss.imageSrc, reading,
                propss.title, propss.subtitle, index, index, updateTabs);
            currFinished[index] = getDummyNode(index);
        }
        setCurrReadingBookCards(currReading);
        setCurrFinishedBookCards(currFinished);
        setCompleteTab(getCompleteTab(currReading,currFinished));
    }
    return completeTab;
}
