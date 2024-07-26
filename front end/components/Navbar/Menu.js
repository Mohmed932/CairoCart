import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Menu = () => {
    const items = [
        {
            name:"سوبر ماركت",
            icon:<LocalGroceryStoreIcon/>,
            link:"/Supermarket"
        },
        {
            name:"موضه",
            icon:<CheckroomIcon/>,
            link:"/fashion"
        },
        {
            name:"صحه وجمال",
            icon:<FitnessCenterIcon/>,
            link:"/healthandbeauty"
        },
        {
            name:"هواتف ذكيه",
            icon:<PhoneAndroidIcon/>,
            link:"/smartphones"
        },
    ];
  return (
    <div>Menu</div>
  )
}

export default Menu