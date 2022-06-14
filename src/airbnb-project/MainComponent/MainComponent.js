import Swim from './swim.png'
import Star from './star.png';

export default function MainComponent(){
    return (
        <main>
            <div>
                <div>
                <p>SOLD OUT</p>
                <img src={Swim} alt='swimmer'/>
                </div>
                <div>
                    <p>
                        <img src={Star} alt='star'/>
                        <p className='card--rate'>5.0</p>
                        <p></p>
                    </p>
                </div>
            </div>
        </main>
    )
}