import img from '../assets/listingCard.png'
function ListingCard(){
    return(
        <div className='col-12-xs col-6-sm col-4-lg col-3-xl listingCard'>         
            <img src={img} alt="listing card"/>         
            <h4 className='title'>Amber sea</h4>
            <p className='description'>Lorem ipsum dolor sit amet</p>
            <p className='price'>$1,000,000.00</p>
        </div>
    )
}

export default ListingCard