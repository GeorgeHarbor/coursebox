import CallToAction from "../CallToAction/CallToAction";
import { Carousel } from "./Carousel";
import { Partners } from "./Partners/Partners";
import PopularCourses from "./PopularCourses/PopularCourses";
import { Testimonials } from "./Testimonials";
import { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader(){
  console.log("index loader");
  return new Promise((resolve, reject) => {

    axios.get("https://localhost:7145/api/Courses").then((response) => {
      const cards = [] as Array<CarouselCard>;
      for(let i = 0; i < 3; i++){
        cards.push({
          title: response.data[i].name,
          text: response.data[i].description,
          image: response.data[i].image,
          accessible: true,
          link: response.data[i].link,
          category: response.data[i].keywords[i]
        });
      }
      const courses = [] as Array<TPopularCourse>;
      for(let i = 0; i < 8; i++){
        courses.push({
          image: {
            link: response.data[i].image,
            alt: response.data[i].name
          },
          title: response.data[i].name,
          text: response.data[i].description,
          link: response.data[i].link,
          category: response.data[i].keywords[0]
        });
      }

      axios.get("https://localhost:7145/api/School").then((responseSchool) => {
        const schools = responseSchool.data as Array<School>;
        resolve([cards, courses, schools]);

      }).catch((error) => {
        console.error("Error while fetching schools");
        resolve(null);
      });
      
    }).catch((error) => {
      console.error("Error while fetching courses", error);
      resolve(null);
    });
  });
}
export const Index = () => {

    const [loadedCards, loadedCourses, loadedSchools] = useLoaderData() as any;

    const [carouselCards] = useState<Array<CarouselCard>>(loadedCards);
    const [courses] = useState(loadedCourses);

    return(
        <>
          <Carousel cards={carouselCards}/>
          <CallToAction />
          <PopularCourses courses={courses}/>
          <Partners schools={loadedSchools}/>
          <Testimonials />
        </>
    );
}