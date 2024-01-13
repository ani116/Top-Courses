import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { FcLike} from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;    

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se like hua pda h
            setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id ) ) );
            toast.warning("liked removed");
        }
        else{
             //pehle se like pada hua nhi tha hum click krke usme like add kr rhe h

             //insertkarna h ye course like courses me
              if(likedCourses.length === 0){
                setLikedCourses([course.id])
              }

              //non-empty pehle se
              else{
                setLikedCourses( (prev) => [...prev, course.id] )
              }
              toast.success("liked successfully");
        }

    }

    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">

            <div className="relative">

                <img src={course.image.url}></img>

                <div className="w-[30px] h-[30px] bg-white rounded-full absolute left-[16.5rem] bottom-1 grid place-items-center">

                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>)  : ( <FcLikePlaceholder fontSize="1.75rem"/> )
                        }
                    </button>

                </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ? (course.description.substr(0, 100)) + '...': (course.description)
                    }
                </p>
            </div>

        </div>
    );
}

export default Card;