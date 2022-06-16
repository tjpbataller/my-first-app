import Swim from './swim.png'
import Star from './star.png';

export default function MainComponent(){
    return (
        <div className='card'>
        <div className='card--status'>SOLD OUT</div>
        <img className='card--photo' src={Swim} alt='card shown'/>
        <div className="card--details">
            <div className="card--rating">
            <img className='star--rating' src={Star} alt="star rating"/>
            <span className="rate--number">5.0</span>
            <span className="total--booking">(6)</span>
            <span className="booking--country">USA</span>
            </div>
            <div className="card--text">Life lessons with Katie Zaferes</div>
            <div className="card--price">
            <span><b>From $<span className='booking--price'>136</span></b> / person</span>
            </div>
        </div>
        </div>
    )
}