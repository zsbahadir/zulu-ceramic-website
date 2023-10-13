//Import Next
import Card from '@/components/Card';



interface ShoppingHomePageProps {
    images: any;
};


function ShoppingHomePage(props: ShoppingHomePageProps){

    const { images } = props;


    return(
        <div className='grid grid-cols-3 gap-4 justify-evenly'>
            {images?.slice(0,3).map(( image : any ) => (
                    <div className='m-12 place-content-center hover:scale-105'>
                    <Card src={image?.src} alt={image?.alt} width={250} height={250} label={image?.label}/>
                    </div>
                )
                )}
          
        </div>
    )
};

export default ShoppingHomePage;