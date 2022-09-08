import profile from '../../../src/assets/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between border-b-2'>
            <h1 className="text-4xl text-center">Knowledge Cafe</h1>
            <img src={profile} alt="logo" />
        </div>
    );
};

export default Header;