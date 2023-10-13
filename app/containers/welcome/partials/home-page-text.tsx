//Import Fonts
import '@/styles/font.css'

//import Components
import Text from "@/components/Text";


const firstLine = "Unique, Handmade, Shiny";
const secondLine = "products produced with";
const firstSpan = "ceramic";
const secondSpan = "care";

function HomePageText() {
  return (
    <div className='mt-32'>
      {/* light olmadi bur turlu  el yazilari ile ayni hizaya gelmiyor.*/}
    
      <Text text={firstLine} className='text-center font-light text-4xl mb-8'/>   

      <div className='flex justify-center'>
      <Text text={firstSpan}  size='4xl' italic handWriting marginTop={1}/>     
      <Text text={secondLine} size='4xl' weight='light' marginX={6}/>    
      <Text text={secondSpan} size='4xl' italic handWriting marginTop={1}/>    
      </div>
    </div>
  );
}

export default HomePageText;
