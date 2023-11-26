import { RedisClient } from "../../../../shared/redis";
import { EVENT_USER_CREATED } from "../../../events/constants";


const initUserEvents = () => {
    // RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
    //     const data: any = JSON.parse(e);

    //     // await AcademicSemesterService.createSemesterFromEvent(data);
    //     //console.log(data);
    // });

};

export default initUserEvents;