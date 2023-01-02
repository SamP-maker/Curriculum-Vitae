import { v4 as uuidv4 } from "uuid";
import stockImage from "../../assets/stockImage.jpg"


const exampleCV = {
  personalInfo: {
    name: "",
    title: "",
    photo: stockImage,
    phoneNumber: "",
    email: "",
    LinkedIn: "",
  },


  education:[{
    id:uuidv4(),
    institution:"",
    major:"",
    startDate:"",
    endDate:"",
    specialisation:"",
  },],

  experience:[{
    id:uuidv4(),
    company:"",
    position:"",
    startDate:"",
    endDate:"",
  
  },],

  Award:[{
    id:uuidv4(),
    award:"",
  },],


  Language:[{
    id:uuidv4(),
    language:"",

  },],

  Goal:[{
    id:uuidv4(),
    goal:"",
  }],



  sidebar:[{
    id:uuidv4(),
    objective:"",
    interest:"",
    accomplishment:"",
  },],

  sidebarPhoto:{
    Photo: stockImage,
  },





};


export default exampleCV;