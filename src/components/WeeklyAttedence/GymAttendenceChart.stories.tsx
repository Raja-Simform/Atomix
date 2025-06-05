import GymAttendenceChart from "./GymAttendenceChart";
import type GymAttendenceProp from "./GymAttendenceProp";
import {  type StoryFn } from "@storybook/react";
export default {
    title:"components/GymAttendenceChart",
    component:GymAttendenceChart,
    // argTypes: {
    //     attendence: { control: "object" },
    // },
};
const template:StoryFn<GymAttendenceProp> =(args)=>(
    <GymAttendenceChart {...args}/>
)
export const Default = template.bind({});
Default.args = {
  attendence: [3, 5, 2, 7, 6, 4, 3, 5, 6, 7, 1, 0, 4, 5]
};