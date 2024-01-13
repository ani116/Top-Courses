import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    let [likedCourses, setLikedCourses] = useState([]); 

    function getCourses()
    {

        if(category === "All")
        {
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) => {
                    allCourses.push(course);
                } )
            } )
            return allCourses;
            // this function return the single array from the data(API)
        }
        else
        {
            // main sirf specific category ka data array show krunga
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) =>{
                    return <Card key={course.id}  
                    course={course}
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses}> </Card>;
                } ) 
            }
        </div>
    );
}

export default Cards;