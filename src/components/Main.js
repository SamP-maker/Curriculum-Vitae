import React , {useState, useRef} from 'react';
import styled from 'styled-components';
import CVForm from './CVForm/CVForm';
import emptyCV from './Utils/emptyCV';
import CVPreview from './CVPreview/CVPreview';
import {v4 as uuidv4} from 'uuid';
import { useReactToPrint } from 'react-to-print';






const Main = () =>{

 const [cv,setCV] = useState(emptyCV)




 //-----------------------------------------------PERSONAL SECTION-------------------------------------------------------------------------//
const handlePersonal = (e) =>{

  const {name,value,type} = e.target

  if (type === 'file') {
    handleChangeFile(e)
    return
  
}


  setCV((prevState) =>({...prevState,
    personalInfo:{
      ...prevState.personalInfo,
    [name]: value,
    },
  }))
}



//-----------------------------------------------PERSONAL SECTION-------------------------------------------------------------------------//

const handleEducation = (e,id)=>{
  const {name,value} = e.target

  setCV((prevState)=>{
    const newEducation = prevState.education.map((educationItem)=>{
      if(educationItem.id === id){
        return {...educationItem, [name]:value}
      }
      return educationItem
    })
    return {...prevState, education:[...newEducation]}
})

 }

const handleAddEducation = ()=>{
  setCV((prevState)=>(
    
    {...prevState,
    education:[...prevState.education,
    {
      id:uuidv4(),
      institution:"",
      major:"",
      startDate:"",
      endDate:"",
      specialisation:"",


    }
  ]


  }))
}

const handleDeleteEducation = (id) =>{

setCV((prevState)=>{

const currentEducation = prevState.education.filter((educationItem)=>
educationItem.id !==id)

return { ...prevState,education: [...currentEducation]}
})
}





//-----------------------------------------------CHANGEFILE SECTION-------------------------------------------------------------------------//

const handleChangeFile = (e) => {
  const { name } = e.target
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: reader.result,
      },
    }))
  }
  reader.readAsDataURL(file)
}

const handleChangeFileSidebar = (e) => {
  const { name } = e.target
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    setCV((prevState) => ({
      ...prevState,
      sidebarPhoto: {
        ...prevState.sidebarPhoto,
        [name]: reader.result,
      },
    }))
  }
  reader.readAsDataURL(file)
}






//-----------------------------------------------EXPERIENCE SECTION-------------------------------------------------------------------------//

const handleExperience=(e,id)=>{

  const {name,value} = e.target
  setCV((prevState)=>{
    const newExperience = prevState.experience.map((experienceItem)=>{
     if(experienceItem.id === id){
      return {...experienceItem,[name]:value}
     }

     return experienceItem
    })
 return {...prevState, experience:[...newExperience]}
  })

  
}

const handleAddExperience = ()=>{
  setCV((prevState)=>(

    {...prevState,
      experience:[...prevState.experience,
        {
    id:uuidv4(),
    company:"",
    position:"",
    startDate:"",
    endDate:"",
  }
  ]


  }))
}

const handleDeleteExperience = (id) =>{
setCV((prevState)=>{

const currentExperience = prevState.experience.filter((ExperienceItem) =>
ExperienceItem.id !== id

)

return {...prevState,experience:[...currentExperience]}
})

}

//-----------------------------------------------AWARD SECTION-------------------------------------------------------------------------//


const handleAward = (e,id)=>{
  const {name,value} = e.target

  setCV((prevState)=>{
    const newAwards = prevState.Award.map((newAward)=>{

      if(newAward.id === id){
        return {...newAward, [name]:value}
      }

      return newAward
    })
    return {...prevState, Award:[...newAwards]}
  })
}


const handleAddAward=()=>{

  setCV((prevState)=>({
    
    ...prevState,
    Award:[...prevState.Award,
    {
    id:uuidv4(),
    award:"",
  }
]
  
  
  }))

}


const handleDeleteAward=(id)=>{

  setCV((prevState)=> {

    const currentAward = prevState.Award.filter((AwardItem)=> 
    AwardItem.id !== id
    )

    return {...prevState, Award:[...currentAward]}
  })
}


//-----------------------------------------------LANGUAGE SECTION-------------------------------------------------------------------------//


const handleLanguage = (e,id)=>{
  const {name,value} = e.target

  setCV((prevState)=>{
    const newLanguages = prevState.Language.map((newLanguage)=>{

      if(newLanguage.id === id){
        return {...newLanguage, [name]:value}
      }

      return newLanguage
    })
    return {...prevState, Language:[...newLanguages]}
  })
}


const handleAddLanguage=()=>{

  setCV((prevState)=>({
    
    ...prevState,
    Language:[...prevState.Language,
    {
    id:uuidv4(),
    language:"",
  }
]
  
  
  }))

}


const handleDeleteLanguage=(id)=>{

  setCV((prevState)=> {

    const currentLanguage = prevState.Language.filter((LanguageItem)=> 
    LanguageItem.id !== id
    )

    return {...prevState, Language:[...currentLanguage]}
  })
}

//-----------------------------------------------GOAL SECTION-------------------------------------------------------------------------//


const handleGoal = (e,id)=>{
  const {name,value} = e.target

  setCV((prevState)=>{
    const newGoals = prevState.Goal.map((newGoal)=>{

      if(newGoal.id === id){
        return {...newGoal, [name]:value}
      }

      return newGoal
    })
    return {...prevState, Goal:[...newGoals]}
  })
}


const handleAddGoal =()=>{

  setCV((prevState)=>({
    
    ...prevState,
    Goal:[...prevState.Goal,
    {
    id:uuidv4(),
    goal:"",
  }
]
  
  
  }))

}


const handleDeleteGoal=(id)=>{

  setCV((prevState)=> {

    const currentGoal = prevState.Goal.filter((GoalItem)=> 
    GoalItem.id !== id
    )

    return {...prevState, Goal:[...currentGoal]}
  })
}

//-----------------------------------------------SIDEBAR SECTION-------------------------------------------------------------------------//

const handleSidebar=(e,id)=>{

  const {name,value,type} = e.target

  if(type === "file"){
    handleChangeFile(e)
    return
  }

  setCV((prevState)=>{
    const newSidebar = prevState.sidebar.map((sidebarItem)=>{
      if(sidebarItem.id === id){
       return {...sidebarItem,[name]:value}
      }
      return sidebarItem
    })
   return {...prevState,sidebar:[...newSidebar]}
  })
}

const handleAddSidebar=()=>{

  setCV((prevState)=>({
    ...prevState,
    sidebar:[...prevState.sidebar,{
    id:uuidv4(),
    objective:"",
    interest:"",
    accomplishment:"",
    }]
  }
    
    
    ))
}

const handleDeleteSidebar=(id)=>{
  setCV((prevState)=>{
    const currentSidebar = prevState.sidebar.filter((sidebarItem)=>
    sidebarItem.id !== id)

    return {...prevState,sidebar:[...currentSidebar]}
  })
  
}
     
//-----------------------------------------------SIDEBARPHOTO SECTION-------------------------------------------------------------------------//

const handleSidebarPhoto = (e)=>{
  const {name,value,type} = e.target

  if(type === "file"){
    handleChangeFileSidebar(e)
    return
  }

  setCV(prevState=>(
    {...prevState, SidebarPhotoItem:{
      ...prevState.sidebarPhoto,
      [name]:value,
    }

  }))

}

const componentRef = useRef()

  // throws warning because react-to-print uses findDOMNode
const handlePrint = useReactToPrint({ content: () => componentRef.current })






    return(
<HeaderContainer>
    
  
 <CVForm 
 cv={cv} 
 onChangePersonalInfo={handlePersonal} 
 onChangeEducation={handleEducation}
 onAddEducation={handleAddEducation}
  onDeleteEducation={handleDeleteEducation}
  onChangeExperience={handleExperience}
  onAddExperience={handleAddExperience}
  onDeleteExperience={handleDeleteExperience}
  onChangeAward={handleAward}
  onAddAward={handleAddAward}
  onDeleteAward={handleDeleteAward}
  onChangeLanguage={handleLanguage}
  onAddLanguage={handleAddLanguage}
  onDeleteLanguage={handleDeleteLanguage}
  onChangeGoal={handleGoal}
  onAddGoal={handleAddGoal}
  onDeleteGoal={handleDeleteGoal}
  onChangeSidebar={handleSidebar}
  onAddSidebar={handleAddSidebar}
  onDeleteSidebar={handleDeleteSidebar}
  onChangeSidebarPhoto={handleSidebarPhoto}
  onPrint={handlePrint}
>
    
 </CVForm>


<CVPreview cv={cv} ref={componentRef}/>
</HeaderContainer>
)
    } 


const HeaderContainer = styled.div`
display:flex;
flex-direction:column;
background-color: ${({theme}) => theme.colors.white};
margin-top:10%;
`




export default Main