import './Teams.scss';

const Teams = () => {
    return (
        <div className='container'>
            <h1  className='fheading' id='heading'>Teams you own</h1>
           
            <div className='sbody'>
                <h3>Developers</h3>
                <p><b>Members : </b> Haris & 4 others</p>
            </div>
            <div className='sbody'>
                <h3>Maintaince Team</h3>
                <p><b>Members : </b> you & 4 others</p>
            </div>
            
            <h1 className='fheading'>Teams you are part of</h1>
            <div className='sbody'>
                <h3>Developers</h3>
                <p><b>Members : </b> Haris & 4 others</p>
            </div>
            <div className='sbody'>
                <h3>Maintaince Team</h3>
                <p><b>Members : </b> you & 4 others</p>
            </div>
        </div>
    )
}

export default Teams;