export default function Header(){
    return (
<header className="w-full flex items-center px-8 h-20 justify-between">
          <img
            src="/logo.svg"
            className="w-1/12 self-center place-self-center"
            alt=""
          />
          {/* <div className="flex gap-2 items-start justify-center">
            <img className="w-2/5" src="/icons/location.svg" alt="" />
            <p className="text-secondary text-xl font-[900]">Visakhapatnam</p>
          </div> */}
          <a href="/login" className="text-lg text-secondary">
            <img src="/icons/user.svg" alt="" />
          </a>
        </header>
    );
}