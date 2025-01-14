export default function LoginForm() {
  return (
    <div className="absolute z-50 flex flex-col items-center justify-center left-0 right-0 top-0 h-screen bg-black bg-opacity-70">
      <div className="w-fit flex flex-col items-center p-12 justify-center text-center bg-white gap-6 rounded-xl shadow-md">
        <h2 className="text-6xl text-primary font-[900]">LOGIN</h2>
        <h3 className="text-xl text-center text-secondary font-[600]">
          Enter your phone number to continue...
        </h3>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="+91 12345 67890"
            className="border-secondary text-secondary border-[1.5px] px-4 py-2 w-full rounded-lg"
          />
          <button
            type="submit"
            className="text-white bg-secondary rounded-md py-2"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
